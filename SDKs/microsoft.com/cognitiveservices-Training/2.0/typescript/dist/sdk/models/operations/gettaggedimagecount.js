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
var GetTaggedImageCountPathParams = /** @class */ (function (_super) {
    __extends(GetTaggedImageCountPathParams, _super);
    function GetTaggedImageCountPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], GetTaggedImageCountPathParams.prototype, "projectId", void 0);
    return GetTaggedImageCountPathParams;
}(SpeakeasyBase));
export { GetTaggedImageCountPathParams };
var GetTaggedImageCountQueryParams = /** @class */ (function (_super) {
    __extends(GetTaggedImageCountQueryParams, _super);
    function GetTaggedImageCountQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=iterationId" }),
        __metadata("design:type", String)
    ], GetTaggedImageCountQueryParams.prototype, "iterationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=tagIds" }),
        __metadata("design:type", Array)
    ], GetTaggedImageCountQueryParams.prototype, "tagIds", void 0);
    return GetTaggedImageCountQueryParams;
}(SpeakeasyBase));
export { GetTaggedImageCountQueryParams };
var GetTaggedImageCountHeaders = /** @class */ (function (_super) {
    __extends(GetTaggedImageCountHeaders, _super);
    function GetTaggedImageCountHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" }),
        __metadata("design:type", String)
    ], GetTaggedImageCountHeaders.prototype, "trainingKey", void 0);
    return GetTaggedImageCountHeaders;
}(SpeakeasyBase));
export { GetTaggedImageCountHeaders };
var GetTaggedImageCountRequest = /** @class */ (function (_super) {
    __extends(GetTaggedImageCountRequest, _super);
    function GetTaggedImageCountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTaggedImageCountPathParams)
    ], GetTaggedImageCountRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTaggedImageCountQueryParams)
    ], GetTaggedImageCountRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTaggedImageCountHeaders)
    ], GetTaggedImageCountRequest.prototype, "headers", void 0);
    return GetTaggedImageCountRequest;
}(SpeakeasyBase));
export { GetTaggedImageCountRequest };
var GetTaggedImageCountResponse = /** @class */ (function (_super) {
    __extends(GetTaggedImageCountResponse, _super);
    function GetTaggedImageCountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetTaggedImageCountResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTaggedImageCountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTaggedImageCountResponse.prototype, "getTaggedImageCount200ApplicationJsonInt32Integer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTaggedImageCountResponse.prototype, "getTaggedImageCount200TextJsonInt32Integer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTaggedImageCountResponse.prototype, "statusCode", void 0);
    return GetTaggedImageCountResponse;
}(SpeakeasyBase));
export { GetTaggedImageCountResponse };
