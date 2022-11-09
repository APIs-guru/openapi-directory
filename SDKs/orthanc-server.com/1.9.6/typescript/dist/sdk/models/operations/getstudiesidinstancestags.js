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
var GetStudiesIdInstancesTagsPathParams = /** @class */ (function (_super) {
    __extends(GetStudiesIdInstancesTagsPathParams, _super);
    function GetStudiesIdInstancesTagsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetStudiesIdInstancesTagsPathParams.prototype, "id", void 0);
    return GetStudiesIdInstancesTagsPathParams;
}(SpeakeasyBase));
export { GetStudiesIdInstancesTagsPathParams };
var GetStudiesIdInstancesTagsQueryParams = /** @class */ (function (_super) {
    __extends(GetStudiesIdInstancesTagsQueryParams, _super);
    function GetStudiesIdInstancesTagsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ignore-length" }),
        __metadata("design:type", Array)
    ], GetStudiesIdInstancesTagsQueryParams.prototype, "ignoreLength", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=short" }),
        __metadata("design:type", Boolean)
    ], GetStudiesIdInstancesTagsQueryParams.prototype, "short", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=simplify" }),
        __metadata("design:type", Boolean)
    ], GetStudiesIdInstancesTagsQueryParams.prototype, "simplify", void 0);
    return GetStudiesIdInstancesTagsQueryParams;
}(SpeakeasyBase));
export { GetStudiesIdInstancesTagsQueryParams };
var GetStudiesIdInstancesTagsRequest = /** @class */ (function (_super) {
    __extends(GetStudiesIdInstancesTagsRequest, _super);
    function GetStudiesIdInstancesTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetStudiesIdInstancesTagsPathParams)
    ], GetStudiesIdInstancesTagsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetStudiesIdInstancesTagsQueryParams)
    ], GetStudiesIdInstancesTagsRequest.prototype, "queryParams", void 0);
    return GetStudiesIdInstancesTagsRequest;
}(SpeakeasyBase));
export { GetStudiesIdInstancesTagsRequest };
var GetStudiesIdInstancesTagsResponse = /** @class */ (function (_super) {
    __extends(GetStudiesIdInstancesTagsResponse, _super);
    function GetStudiesIdInstancesTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetStudiesIdInstancesTagsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetStudiesIdInstancesTagsResponse.prototype, "getStudiesIdInstancesTags200ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetStudiesIdInstancesTagsResponse.prototype, "statusCode", void 0);
    return GetStudiesIdInstancesTagsResponse;
}(SpeakeasyBase));
export { GetStudiesIdInstancesTagsResponse };
