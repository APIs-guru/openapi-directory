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
var DeleteItemImagePathParams = /** @class */ (function (_super) {
    __extends(DeleteItemImagePathParams, _super);
    function DeleteItemImagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageType" }),
        __metadata("design:type", String)
    ], DeleteItemImagePathParams.prototype, "imageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], DeleteItemImagePathParams.prototype, "itemId", void 0);
    return DeleteItemImagePathParams;
}(SpeakeasyBase));
export { DeleteItemImagePathParams };
var DeleteItemImageQueryParams = /** @class */ (function (_super) {
    __extends(DeleteItemImageQueryParams, _super);
    function DeleteItemImageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imageIndex" }),
        __metadata("design:type", Number)
    ], DeleteItemImageQueryParams.prototype, "imageIndex", void 0);
    return DeleteItemImageQueryParams;
}(SpeakeasyBase));
export { DeleteItemImageQueryParams };
var DeleteItemImageSecurity = /** @class */ (function (_super) {
    __extends(DeleteItemImageSecurity, _super);
    function DeleteItemImageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], DeleteItemImageSecurity.prototype, "customAuthentication", void 0);
    return DeleteItemImageSecurity;
}(SpeakeasyBase));
export { DeleteItemImageSecurity };
var DeleteItemImageRequest = /** @class */ (function (_super) {
    __extends(DeleteItemImageRequest, _super);
    function DeleteItemImageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteItemImagePathParams)
    ], DeleteItemImageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteItemImageQueryParams)
    ], DeleteItemImageRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteItemImageSecurity)
    ], DeleteItemImageRequest.prototype, "security", void 0);
    return DeleteItemImageRequest;
}(SpeakeasyBase));
export { DeleteItemImageRequest };
var DeleteItemImageResponse = /** @class */ (function (_super) {
    __extends(DeleteItemImageResponse, _super);
    function DeleteItemImageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteItemImageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteItemImageResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteItemImageResponse.prototype, "statusCode", void 0);
    return DeleteItemImageResponse;
}(SpeakeasyBase));
export { DeleteItemImageResponse };
