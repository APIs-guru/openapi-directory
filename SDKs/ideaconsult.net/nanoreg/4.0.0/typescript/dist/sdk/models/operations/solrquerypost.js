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
export var SolrqueryPostWtEnum;
(function (SolrqueryPostWtEnum) {
    SolrqueryPostWtEnum["Json"] = "json";
    SolrqueryPostWtEnum["Xml"] = "xml";
})(SolrqueryPostWtEnum || (SolrqueryPostWtEnum = {}));
var SolrqueryPostQueryParams = /** @class */ (function (_super) {
    __extends(SolrqueryPostQueryParams, _super);
    function SolrqueryPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=wt" }),
        __metadata("design:type", String)
    ], SolrqueryPostQueryParams.prototype, "wt", void 0);
    return SolrqueryPostQueryParams;
}(SpeakeasyBase));
export { SolrqueryPostQueryParams };
var SolrqueryPostRequestBodyParams = /** @class */ (function (_super) {
    __extends(SolrqueryPostRequestBodyParams, _super);
    function SolrqueryPostRequestBodyParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=fl" }),
        __metadata("design:type", Array)
    ], SolrqueryPostRequestBodyParams.prototype, "fl", void 0);
    __decorate([
        Metadata({ data: "json, name=rows" }),
        __metadata("design:type", Number)
    ], SolrqueryPostRequestBodyParams.prototype, "rows", void 0);
    return SolrqueryPostRequestBodyParams;
}(SpeakeasyBase));
export { SolrqueryPostRequestBodyParams };
var SolrqueryPostRequestBody = /** @class */ (function (_super) {
    __extends(SolrqueryPostRequestBody, _super);
    function SolrqueryPostRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=facet" }),
        __metadata("design:type", Map)
    ], SolrqueryPostRequestBody.prototype, "facet", void 0);
    __decorate([
        Metadata({ data: "json, name=params" }),
        __metadata("design:type", SolrqueryPostRequestBodyParams)
    ], SolrqueryPostRequestBody.prototype, "params", void 0);
    return SolrqueryPostRequestBody;
}(SpeakeasyBase));
export { SolrqueryPostRequestBody };
var SolrqueryPostRequest = /** @class */ (function (_super) {
    __extends(SolrqueryPostRequest, _super);
    function SolrqueryPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SolrqueryPostQueryParams)
    ], SolrqueryPostRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SolrqueryPostRequestBody)
    ], SolrqueryPostRequest.prototype, "request", void 0);
    return SolrqueryPostRequest;
}(SpeakeasyBase));
export { SolrqueryPostRequest };
var SolrqueryPostResponse = /** @class */ (function (_super) {
    __extends(SolrqueryPostResponse, _super);
    function SolrqueryPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], SolrqueryPostResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SolrqueryPostResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SolrResponse)
    ], SolrqueryPostResponse.prototype, "solrResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SolrqueryPostResponse.prototype, "statusCode", void 0);
    return SolrqueryPostResponse;
}(SpeakeasyBase));
export { SolrqueryPostResponse };
