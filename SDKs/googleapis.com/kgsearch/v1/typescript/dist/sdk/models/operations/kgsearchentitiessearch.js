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
var KgsearchEntitiesSearchQueryParams = /** @class */ (function (_super) {
    __extends(KgsearchEntitiesSearchQueryParams, _super);
    function KgsearchEntitiesSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], KgsearchEntitiesSearchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], KgsearchEntitiesSearchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], KgsearchEntitiesSearchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], KgsearchEntitiesSearchQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], KgsearchEntitiesSearchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], KgsearchEntitiesSearchQueryParams.prototype, "ids", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=indent" }),
        __metadata("design:type", Boolean)
    ], KgsearchEntitiesSearchQueryParams.prototype, "indent", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], KgsearchEntitiesSearchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=languages" }),
        __metadata("design:type", Array)
    ], KgsearchEntitiesSearchQueryParams.prototype, "languages", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], KgsearchEntitiesSearchQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], KgsearchEntitiesSearchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prefix" }),
        __metadata("design:type", Boolean)
    ], KgsearchEntitiesSearchQueryParams.prototype, "prefix", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], KgsearchEntitiesSearchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], KgsearchEntitiesSearchQueryParams.prototype, "query", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], KgsearchEntitiesSearchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=types" }),
        __metadata("design:type", Array)
    ], KgsearchEntitiesSearchQueryParams.prototype, "types", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], KgsearchEntitiesSearchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], KgsearchEntitiesSearchQueryParams.prototype, "uploadProtocol", void 0);
    return KgsearchEntitiesSearchQueryParams;
}(SpeakeasyBase));
export { KgsearchEntitiesSearchQueryParams };
var KgsearchEntitiesSearchRequest = /** @class */ (function (_super) {
    __extends(KgsearchEntitiesSearchRequest, _super);
    function KgsearchEntitiesSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", KgsearchEntitiesSearchQueryParams)
    ], KgsearchEntitiesSearchRequest.prototype, "queryParams", void 0);
    return KgsearchEntitiesSearchRequest;
}(SpeakeasyBase));
export { KgsearchEntitiesSearchRequest };
var KgsearchEntitiesSearchResponse = /** @class */ (function (_super) {
    __extends(KgsearchEntitiesSearchResponse, _super);
    function KgsearchEntitiesSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], KgsearchEntitiesSearchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SearchResponse)
    ], KgsearchEntitiesSearchResponse.prototype, "searchResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], KgsearchEntitiesSearchResponse.prototype, "statusCode", void 0);
    return KgsearchEntitiesSearchResponse;
}(SpeakeasyBase));
export { KgsearchEntitiesSearchResponse };
