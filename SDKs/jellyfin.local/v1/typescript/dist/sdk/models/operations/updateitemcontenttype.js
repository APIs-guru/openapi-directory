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
var UpdateItemContentTypePathParams = /** @class */ (function (_super) {
    __extends(UpdateItemContentTypePathParams, _super);
    function UpdateItemContentTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], UpdateItemContentTypePathParams.prototype, "itemId", void 0);
    return UpdateItemContentTypePathParams;
}(SpeakeasyBase));
export { UpdateItemContentTypePathParams };
var UpdateItemContentTypeQueryParams = /** @class */ (function (_super) {
    __extends(UpdateItemContentTypeQueryParams, _super);
    function UpdateItemContentTypeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contentType" }),
        __metadata("design:type", String)
    ], UpdateItemContentTypeQueryParams.prototype, "contentType", void 0);
    return UpdateItemContentTypeQueryParams;
}(SpeakeasyBase));
export { UpdateItemContentTypeQueryParams };
var UpdateItemContentTypeSecurity = /** @class */ (function (_super) {
    __extends(UpdateItemContentTypeSecurity, _super);
    function UpdateItemContentTypeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], UpdateItemContentTypeSecurity.prototype, "customAuthentication", void 0);
    return UpdateItemContentTypeSecurity;
}(SpeakeasyBase));
export { UpdateItemContentTypeSecurity };
var UpdateItemContentTypeRequest = /** @class */ (function (_super) {
    __extends(UpdateItemContentTypeRequest, _super);
    function UpdateItemContentTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateItemContentTypePathParams)
    ], UpdateItemContentTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateItemContentTypeQueryParams)
    ], UpdateItemContentTypeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateItemContentTypeSecurity)
    ], UpdateItemContentTypeRequest.prototype, "security", void 0);
    return UpdateItemContentTypeRequest;
}(SpeakeasyBase));
export { UpdateItemContentTypeRequest };
var UpdateItemContentTypeResponse = /** @class */ (function (_super) {
    __extends(UpdateItemContentTypeResponse, _super);
    function UpdateItemContentTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateItemContentTypeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateItemContentTypeResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateItemContentTypeResponse.prototype, "statusCode", void 0);
    return UpdateItemContentTypeResponse;
}(SpeakeasyBase));
export { UpdateItemContentTypeResponse };
