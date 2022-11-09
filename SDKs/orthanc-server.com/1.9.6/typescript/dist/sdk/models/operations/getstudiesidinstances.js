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
var GetStudiesIdInstancesPathParams = /** @class */ (function (_super) {
    __extends(GetStudiesIdInstancesPathParams, _super);
    function GetStudiesIdInstancesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetStudiesIdInstancesPathParams.prototype, "id", void 0);
    return GetStudiesIdInstancesPathParams;
}(SpeakeasyBase));
export { GetStudiesIdInstancesPathParams };
var GetStudiesIdInstancesQueryParams = /** @class */ (function (_super) {
    __extends(GetStudiesIdInstancesQueryParams, _super);
    function GetStudiesIdInstancesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=full" }),
        __metadata("design:type", Boolean)
    ], GetStudiesIdInstancesQueryParams.prototype, "full", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=short" }),
        __metadata("design:type", Boolean)
    ], GetStudiesIdInstancesQueryParams.prototype, "short", void 0);
    return GetStudiesIdInstancesQueryParams;
}(SpeakeasyBase));
export { GetStudiesIdInstancesQueryParams };
var GetStudiesIdInstancesRequest = /** @class */ (function (_super) {
    __extends(GetStudiesIdInstancesRequest, _super);
    function GetStudiesIdInstancesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetStudiesIdInstancesPathParams)
    ], GetStudiesIdInstancesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetStudiesIdInstancesQueryParams)
    ], GetStudiesIdInstancesRequest.prototype, "queryParams", void 0);
    return GetStudiesIdInstancesRequest;
}(SpeakeasyBase));
export { GetStudiesIdInstancesRequest };
var GetStudiesIdInstancesResponse = /** @class */ (function (_super) {
    __extends(GetStudiesIdInstancesResponse, _super);
    function GetStudiesIdInstancesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetStudiesIdInstancesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetStudiesIdInstancesResponse.prototype, "getStudiesIdInstances200ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetStudiesIdInstancesResponse.prototype, "statusCode", void 0);
    return GetStudiesIdInstancesResponse;
}(SpeakeasyBase));
export { GetStudiesIdInstancesResponse };
