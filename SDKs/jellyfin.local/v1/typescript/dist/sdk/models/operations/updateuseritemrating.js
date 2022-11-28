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
var UpdateUserItemRatingPathParams = /** @class */ (function (_super) {
    __extends(UpdateUserItemRatingPathParams, _super);
    function UpdateUserItemRatingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], UpdateUserItemRatingPathParams.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], UpdateUserItemRatingPathParams.prototype, "userId", void 0);
    return UpdateUserItemRatingPathParams;
}(SpeakeasyBase));
export { UpdateUserItemRatingPathParams };
var UpdateUserItemRatingQueryParams = /** @class */ (function (_super) {
    __extends(UpdateUserItemRatingQueryParams, _super);
    function UpdateUserItemRatingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=likes" }),
        __metadata("design:type", Boolean)
    ], UpdateUserItemRatingQueryParams.prototype, "likes", void 0);
    return UpdateUserItemRatingQueryParams;
}(SpeakeasyBase));
export { UpdateUserItemRatingQueryParams };
var UpdateUserItemRatingSecurity = /** @class */ (function (_super) {
    __extends(UpdateUserItemRatingSecurity, _super);
    function UpdateUserItemRatingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], UpdateUserItemRatingSecurity.prototype, "customAuthentication", void 0);
    return UpdateUserItemRatingSecurity;
}(SpeakeasyBase));
export { UpdateUserItemRatingSecurity };
var UpdateUserItemRatingRequest = /** @class */ (function (_super) {
    __extends(UpdateUserItemRatingRequest, _super);
    function UpdateUserItemRatingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateUserItemRatingPathParams)
    ], UpdateUserItemRatingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateUserItemRatingQueryParams)
    ], UpdateUserItemRatingRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateUserItemRatingSecurity)
    ], UpdateUserItemRatingRequest.prototype, "security", void 0);
    return UpdateUserItemRatingRequest;
}(SpeakeasyBase));
export { UpdateUserItemRatingRequest };
var UpdateUserItemRatingResponse = /** @class */ (function (_super) {
    __extends(UpdateUserItemRatingResponse, _super);
    function UpdateUserItemRatingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateUserItemRatingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateUserItemRatingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserItemDataDto)
    ], UpdateUserItemRatingResponse.prototype, "userItemDataDto", void 0);
    return UpdateUserItemRatingResponse;
}(SpeakeasyBase));
export { UpdateUserItemRatingResponse };
