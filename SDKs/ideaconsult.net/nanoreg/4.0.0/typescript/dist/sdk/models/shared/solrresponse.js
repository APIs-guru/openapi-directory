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
var SolrResponseResponse = /** @class */ (function (_super) {
    __extends(SolrResponseResponse, _super);
    function SolrResponseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=docs" }),
        __metadata("design:type", Array)
    ], SolrResponseResponse.prototype, "docs", void 0);
    __decorate([
        Metadata({ data: "json, name=maxScore" }),
        __metadata("design:type", Number)
    ], SolrResponseResponse.prototype, "maxScore", void 0);
    __decorate([
        Metadata({ data: "json, name=numFound" }),
        __metadata("design:type", Number)
    ], SolrResponseResponse.prototype, "numFound", void 0);
    __decorate([
        Metadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], SolrResponseResponse.prototype, "start", void 0);
    return SolrResponseResponse;
}(SpeakeasyBase));
export { SolrResponseResponse };
var SolrResponseResponseHeader = /** @class */ (function (_super) {
    __extends(SolrResponseResponseHeader, _super);
    function SolrResponseResponseHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=QTime" }),
        __metadata("design:type", Number)
    ], SolrResponseResponseHeader.prototype, "qTime", void 0);
    __decorate([
        Metadata({ data: "json, name=params" }),
        __metadata("design:type", Map)
    ], SolrResponseResponseHeader.prototype, "params", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], SolrResponseResponseHeader.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=zkConnected" }),
        __metadata("design:type", Boolean)
    ], SolrResponseResponseHeader.prototype, "zkConnected", void 0);
    return SolrResponseResponseHeader;
}(SpeakeasyBase));
export { SolrResponseResponseHeader };
var SolrResponse = /** @class */ (function (_super) {
    __extends(SolrResponse, _super);
    function SolrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=response" }),
        __metadata("design:type", SolrResponseResponse)
    ], SolrResponse.prototype, "response", void 0);
    __decorate([
        Metadata({ data: "json, name=responseHeader" }),
        __metadata("design:type", SolrResponseResponseHeader)
    ], SolrResponse.prototype, "responseHeader", void 0);
    return SolrResponse;
}(SpeakeasyBase));
export { SolrResponse };
