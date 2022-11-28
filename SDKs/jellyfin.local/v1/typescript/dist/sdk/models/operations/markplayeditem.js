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
var MarkPlayedItemPathParams = /** @class */ (function (_super) {
    __extends(MarkPlayedItemPathParams, _super);
    function MarkPlayedItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], MarkPlayedItemPathParams.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], MarkPlayedItemPathParams.prototype, "userId", void 0);
    return MarkPlayedItemPathParams;
}(SpeakeasyBase));
export { MarkPlayedItemPathParams };
var MarkPlayedItemQueryParams = /** @class */ (function (_super) {
    __extends(MarkPlayedItemQueryParams, _super);
    function MarkPlayedItemQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=datePlayed" }),
        __metadata("design:type", Date)
    ], MarkPlayedItemQueryParams.prototype, "datePlayed", void 0);
    return MarkPlayedItemQueryParams;
}(SpeakeasyBase));
export { MarkPlayedItemQueryParams };
var MarkPlayedItemSecurity = /** @class */ (function (_super) {
    __extends(MarkPlayedItemSecurity, _super);
    function MarkPlayedItemSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], MarkPlayedItemSecurity.prototype, "customAuthentication", void 0);
    return MarkPlayedItemSecurity;
}(SpeakeasyBase));
export { MarkPlayedItemSecurity };
var MarkPlayedItemRequest = /** @class */ (function (_super) {
    __extends(MarkPlayedItemRequest, _super);
    function MarkPlayedItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MarkPlayedItemPathParams)
    ], MarkPlayedItemRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MarkPlayedItemQueryParams)
    ], MarkPlayedItemRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MarkPlayedItemSecurity)
    ], MarkPlayedItemRequest.prototype, "security", void 0);
    return MarkPlayedItemRequest;
}(SpeakeasyBase));
export { MarkPlayedItemRequest };
var MarkPlayedItemResponse = /** @class */ (function (_super) {
    __extends(MarkPlayedItemResponse, _super);
    function MarkPlayedItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MarkPlayedItemResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MarkPlayedItemResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserItemDataDto)
    ], MarkPlayedItemResponse.prototype, "userItemDataDto", void 0);
    return MarkPlayedItemResponse;
}(SpeakeasyBase));
export { MarkPlayedItemResponse };
