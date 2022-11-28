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
var GetTaggedObjectsPathParams = /** @class */ (function (_super) {
    __extends(GetTaggedObjectsPathParams, _super);
    function GetTaggedObjectsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=label" }),
        __metadata("design:type", String)
    ], GetTaggedObjectsPathParams.prototype, "label", void 0);
    return GetTaggedObjectsPathParams;
}(SpeakeasyBase));
export { GetTaggedObjectsPathParams };
var GetTaggedObjectsQueryParams = /** @class */ (function (_super) {
    __extends(GetTaggedObjectsQueryParams, _super);
    function GetTaggedObjectsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetTaggedObjectsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetTaggedObjectsQueryParams.prototype, "pageSize", void 0);
    return GetTaggedObjectsQueryParams;
}(SpeakeasyBase));
export { GetTaggedObjectsQueryParams };
var GetTaggedObjectsSecurity = /** @class */ (function (_super) {
    __extends(GetTaggedObjectsSecurity, _super);
    function GetTaggedObjectsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetTaggedObjectsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetTaggedObjectsSecurity.prototype, "oauth", void 0);
    return GetTaggedObjectsSecurity;
}(SpeakeasyBase));
export { GetTaggedObjectsSecurity };
var GetTaggedObjectsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetTaggedObjectsDefaultApplicationJson, _super);
    function GetTaggedObjectsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetTaggedObjectsDefaultApplicationJson.prototype, "errors", void 0);
    return GetTaggedObjectsDefaultApplicationJson;
}(SpeakeasyBase));
export { GetTaggedObjectsDefaultApplicationJson };
var GetTaggedObjectsRequest = /** @class */ (function (_super) {
    __extends(GetTaggedObjectsRequest, _super);
    function GetTaggedObjectsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTaggedObjectsPathParams)
    ], GetTaggedObjectsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTaggedObjectsQueryParams)
    ], GetTaggedObjectsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTaggedObjectsSecurity)
    ], GetTaggedObjectsRequest.prototype, "security", void 0);
    return GetTaggedObjectsRequest;
}(SpeakeasyBase));
export { GetTaggedObjectsRequest };
var GetTaggedObjectsResponse = /** @class */ (function (_super) {
    __extends(GetTaggedObjectsResponse, _super);
    function GetTaggedObjectsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTaggedObjectsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTaggedObjectsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetTaggedObjectsResponse.prototype, "getTaggedObjects200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTaggedObjectsDefaultApplicationJson)
    ], GetTaggedObjectsResponse.prototype, "getTaggedObjectsDefaultApplicationJsonObject", void 0);
    return GetTaggedObjectsResponse;
}(SpeakeasyBase));
export { GetTaggedObjectsResponse };
