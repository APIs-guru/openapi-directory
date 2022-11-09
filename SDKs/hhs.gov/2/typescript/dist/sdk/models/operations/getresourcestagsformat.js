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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var GetResourcesTagsFormatPathParams = /** @class */ (function (_super) {
    __extends(GetResourcesTagsFormatPathParams, _super);
    function GetResourcesTagsFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], GetResourcesTagsFormatPathParams.prototype, "format", void 0);
    return GetResourcesTagsFormatPathParams;
}(SpeakeasyBase));
export { GetResourcesTagsFormatPathParams };
var GetResourcesTagsFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetResourcesTagsFormatQueryParams, _super);
    function GetResourcesTagsFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=max" }),
        __metadata("design:type", Number)
    ], GetResourcesTagsFormatQueryParams.prototype, "max", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=mediaId" }),
        __metadata("design:type", Number)
    ], GetResourcesTagsFormatQueryParams.prototype, "mediaId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GetResourcesTagsFormatQueryParams.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=nameContains" }),
        __metadata("design:type", String)
    ], GetResourcesTagsFormatQueryParams.prototype, "nameContains", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=offset" }),
        __metadata("design:type", Number)
    ], GetResourcesTagsFormatQueryParams.prototype, "offset", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=sort" }),
        __metadata("design:type", String)
    ], GetResourcesTagsFormatQueryParams.prototype, "sort", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=typeId" }),
        __metadata("design:type", Number)
    ], GetResourcesTagsFormatQueryParams.prototype, "typeId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=typeName" }),
        __metadata("design:type", String)
    ], GetResourcesTagsFormatQueryParams.prototype, "typeName", void 0);
    return GetResourcesTagsFormatQueryParams;
}(SpeakeasyBase));
export { GetResourcesTagsFormatQueryParams };
var GetResourcesTagsFormatRequest = /** @class */ (function (_super) {
    __extends(GetResourcesTagsFormatRequest, _super);
    function GetResourcesTagsFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetResourcesTagsFormatPathParams)
    ], GetResourcesTagsFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetResourcesTagsFormatQueryParams)
    ], GetResourcesTagsFormatRequest.prototype, "queryParams", void 0);
    return GetResourcesTagsFormatRequest;
}(SpeakeasyBase));
export { GetResourcesTagsFormatRequest };
var GetResourcesTagsFormatResponse = /** @class */ (function (_super) {
    __extends(GetResourcesTagsFormatResponse, _super);
    function GetResourcesTagsFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetResourcesTagsFormatResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetResourcesTagsFormatResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata({ elemType: shared.TagMarshallerWrapped }),
        __metadata("design:type", Array)
    ], GetResourcesTagsFormatResponse.prototype, "tagMarshallerWrappeds", void 0);
    return GetResourcesTagsFormatResponse;
}(SpeakeasyBase));
export { GetResourcesTagsFormatResponse };
