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
var MarkUnplayedItemPathParams = /** @class */ (function (_super) {
    __extends(MarkUnplayedItemPathParams, _super);
    function MarkUnplayedItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], MarkUnplayedItemPathParams.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], MarkUnplayedItemPathParams.prototype, "userId", void 0);
    return MarkUnplayedItemPathParams;
}(SpeakeasyBase));
export { MarkUnplayedItemPathParams };
var MarkUnplayedItemSecurity = /** @class */ (function (_super) {
    __extends(MarkUnplayedItemSecurity, _super);
    function MarkUnplayedItemSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], MarkUnplayedItemSecurity.prototype, "customAuthentication", void 0);
    return MarkUnplayedItemSecurity;
}(SpeakeasyBase));
export { MarkUnplayedItemSecurity };
var MarkUnplayedItemRequest = /** @class */ (function (_super) {
    __extends(MarkUnplayedItemRequest, _super);
    function MarkUnplayedItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MarkUnplayedItemPathParams)
    ], MarkUnplayedItemRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MarkUnplayedItemSecurity)
    ], MarkUnplayedItemRequest.prototype, "security", void 0);
    return MarkUnplayedItemRequest;
}(SpeakeasyBase));
export { MarkUnplayedItemRequest };
var MarkUnplayedItemResponse = /** @class */ (function (_super) {
    __extends(MarkUnplayedItemResponse, _super);
    function MarkUnplayedItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MarkUnplayedItemResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MarkUnplayedItemResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserItemDataDto)
    ], MarkUnplayedItemResponse.prototype, "userItemDataDto", void 0);
    return MarkUnplayedItemResponse;
}(SpeakeasyBase));
export { MarkUnplayedItemResponse };
