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
var SyncPlayPreviousItemRequests = /** @class */ (function (_super) {
    __extends(SyncPlayPreviousItemRequests, _super);
    function SyncPlayPreviousItemRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.PreviousItemRequestDto)
    ], SyncPlayPreviousItemRequests.prototype, "previousItemRequestDto", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PreviousItemRequestDto)
    ], SyncPlayPreviousItemRequests.prototype, "previousItemRequestDto1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.PreviousItemRequestDto)
    ], SyncPlayPreviousItemRequests.prototype, "previousItemRequestDto2", void 0);
    return SyncPlayPreviousItemRequests;
}(SpeakeasyBase));
export { SyncPlayPreviousItemRequests };
var SyncPlayPreviousItemSecurity = /** @class */ (function (_super) {
    __extends(SyncPlayPreviousItemSecurity, _super);
    function SyncPlayPreviousItemSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], SyncPlayPreviousItemSecurity.prototype, "customAuthentication", void 0);
    return SyncPlayPreviousItemSecurity;
}(SpeakeasyBase));
export { SyncPlayPreviousItemSecurity };
var SyncPlayPreviousItemRequest = /** @class */ (function (_super) {
    __extends(SyncPlayPreviousItemRequest, _super);
    function SyncPlayPreviousItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SyncPlayPreviousItemRequests)
    ], SyncPlayPreviousItemRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SyncPlayPreviousItemSecurity)
    ], SyncPlayPreviousItemRequest.prototype, "security", void 0);
    return SyncPlayPreviousItemRequest;
}(SpeakeasyBase));
export { SyncPlayPreviousItemRequest };
var SyncPlayPreviousItemResponse = /** @class */ (function (_super) {
    __extends(SyncPlayPreviousItemResponse, _super);
    function SyncPlayPreviousItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SyncPlayPreviousItemResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SyncPlayPreviousItemResponse.prototype, "statusCode", void 0);
    return SyncPlayPreviousItemResponse;
}(SpeakeasyBase));
export { SyncPlayPreviousItemResponse };
