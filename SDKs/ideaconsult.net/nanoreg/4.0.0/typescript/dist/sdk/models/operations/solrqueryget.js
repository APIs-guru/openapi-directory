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
export var SolrqueryGetWtEnum;
(function (SolrqueryGetWtEnum) {
    SolrqueryGetWtEnum["Json"] = "json";
    SolrqueryGetWtEnum["Xml"] = "xml";
})(SolrqueryGetWtEnum || (SolrqueryGetWtEnum = {}));
var SolrqueryGetQueryParams = /** @class */ (function (_super) {
    __extends(SolrqueryGetQueryParams, _super);
    function SolrqueryGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], SolrqueryGetQueryParams.prototype, "q", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=rows" }),
        __metadata("design:type", Number)
    ], SolrqueryGetQueryParams.prototype, "rows", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], SolrqueryGetQueryParams.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=wt" }),
        __metadata("design:type", String)
    ], SolrqueryGetQueryParams.prototype, "wt", void 0);
    return SolrqueryGetQueryParams;
}(SpeakeasyBase));
export { SolrqueryGetQueryParams };
var SolrqueryGetRequest = /** @class */ (function (_super) {
    __extends(SolrqueryGetRequest, _super);
    function SolrqueryGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SolrqueryGetQueryParams)
    ], SolrqueryGetRequest.prototype, "queryParams", void 0);
    return SolrqueryGetRequest;
}(SpeakeasyBase));
export { SolrqueryGetRequest };
var SolrqueryGetResponse = /** @class */ (function (_super) {
    __extends(SolrqueryGetResponse, _super);
    function SolrqueryGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], SolrqueryGetResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SolrqueryGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SolrResponse)
    ], SolrqueryGetResponse.prototype, "solrResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SolrqueryGetResponse.prototype, "statusCode", void 0);
    return SolrqueryGetResponse;
}(SpeakeasyBase));
export { SolrqueryGetResponse };
