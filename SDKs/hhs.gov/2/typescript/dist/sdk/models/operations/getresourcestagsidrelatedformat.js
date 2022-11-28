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
var GetResourcesTagsIdRelatedFormatPathParams = /** @class */ (function (_super) {
    __extends(GetResourcesTagsIdRelatedFormatPathParams, _super);
    function GetResourcesTagsIdRelatedFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], GetResourcesTagsIdRelatedFormatPathParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetResourcesTagsIdRelatedFormatPathParams.prototype, "id", void 0);
    return GetResourcesTagsIdRelatedFormatPathParams;
}(SpeakeasyBase));
export { GetResourcesTagsIdRelatedFormatPathParams };
var GetResourcesTagsIdRelatedFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetResourcesTagsIdRelatedFormatQueryParams, _super);
    function GetResourcesTagsIdRelatedFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=max" }),
        __metadata("design:type", Number)
    ], GetResourcesTagsIdRelatedFormatQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=offset" }),
        __metadata("design:type", Number)
    ], GetResourcesTagsIdRelatedFormatQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=sort" }),
        __metadata("design:type", String)
    ], GetResourcesTagsIdRelatedFormatQueryParams.prototype, "sort", void 0);
    return GetResourcesTagsIdRelatedFormatQueryParams;
}(SpeakeasyBase));
export { GetResourcesTagsIdRelatedFormatQueryParams };
var GetResourcesTagsIdRelatedFormatRequest = /** @class */ (function (_super) {
    __extends(GetResourcesTagsIdRelatedFormatRequest, _super);
    function GetResourcesTagsIdRelatedFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetResourcesTagsIdRelatedFormatPathParams)
    ], GetResourcesTagsIdRelatedFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetResourcesTagsIdRelatedFormatQueryParams)
    ], GetResourcesTagsIdRelatedFormatRequest.prototype, "queryParams", void 0);
    return GetResourcesTagsIdRelatedFormatRequest;
}(SpeakeasyBase));
export { GetResourcesTagsIdRelatedFormatRequest };
var GetResourcesTagsIdRelatedFormatResponse = /** @class */ (function (_super) {
    __extends(GetResourcesTagsIdRelatedFormatResponse, _super);
    function GetResourcesTagsIdRelatedFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetResourcesTagsIdRelatedFormatResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetResourcesTagsIdRelatedFormatResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.TagMarshallerWrapped }),
        __metadata("design:type", Array)
    ], GetResourcesTagsIdRelatedFormatResponse.prototype, "tagMarshallerWrappeds", void 0);
    return GetResourcesTagsIdRelatedFormatResponse;
}(SpeakeasyBase));
export { GetResourcesTagsIdRelatedFormatResponse };
