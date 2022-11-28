var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var SyncPlayNextItemRequests = /** @class */ (function (_super) {
    __extends(SyncPlayNextItemRequests, _super);
    function SyncPlayNextItemRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.NextItemRequestDto)
    ], SyncPlayNextItemRequests.prototype, "nextItemRequestDto", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.NextItemRequestDto)
    ], SyncPlayNextItemRequests.prototype, "nextItemRequestDto1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.NextItemRequestDto)
    ], SyncPlayNextItemRequests.prototype, "nextItemRequestDto2", void 0);
    return SyncPlayNextItemRequests;
}(SpeakeasyBase));
export { SyncPlayNextItemRequests };
var SyncPlayNextItemSecurity = /** @class */ (function (_super) {
    __extends(SyncPlayNextItemSecurity, _super);
    function SyncPlayNextItemSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], SyncPlayNextItemSecurity.prototype, "customAuthentication", void 0);
    return SyncPlayNextItemSecurity;
}(SpeakeasyBase));
export { SyncPlayNextItemSecurity };
var SyncPlayNextItemRequest = /** @class */ (function (_super) {
    __extends(SyncPlayNextItemRequest, _super);
    function SyncPlayNextItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SyncPlayNextItemRequests)
    ], SyncPlayNextItemRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SyncPlayNextItemSecurity)
    ], SyncPlayNextItemRequest.prototype, "security", void 0);
    return SyncPlayNextItemRequest;
}(SpeakeasyBase));
export { SyncPlayNextItemRequest };
var SyncPlayNextItemResponse = /** @class */ (function (_super) {
    __extends(SyncPlayNextItemResponse, _super);
    function SyncPlayNextItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SyncPlayNextItemResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SyncPlayNextItemResponse.prototype, "statusCode", void 0);
    return SyncPlayNextItemResponse;
}(SpeakeasyBase));
export { SyncPlayNextItemResponse };
