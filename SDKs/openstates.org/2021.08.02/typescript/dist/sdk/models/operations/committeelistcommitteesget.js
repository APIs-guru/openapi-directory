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
var CommitteeListCommitteesGetQueryParams = /** @class */ (function (_super) {
    __extends(CommitteeListCommitteesGetQueryParams, _super);
    function CommitteeListCommitteesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apikey" }),
        __metadata("design:type", String)
    ], CommitteeListCommitteesGetQueryParams.prototype, "apikey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=chamber" }),
        __metadata("design:type", String)
    ], CommitteeListCommitteesGetQueryParams.prototype, "chamber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=classification" }),
        __metadata("design:type", String)
    ], CommitteeListCommitteesGetQueryParams.prototype, "classification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" }),
        __metadata("design:type", Array)
    ], CommitteeListCommitteesGetQueryParams.prototype, "include", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jurisdiction" }),
        __metadata("design:type", String)
    ], CommitteeListCommitteesGetQueryParams.prototype, "jurisdiction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], CommitteeListCommitteesGetQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parent" }),
        __metadata("design:type", String)
    ], CommitteeListCommitteesGetQueryParams.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], CommitteeListCommitteesGetQueryParams.prototype, "perPage", void 0);
    return CommitteeListCommitteesGetQueryParams;
}(SpeakeasyBase));
export { CommitteeListCommitteesGetQueryParams };
var CommitteeListCommitteesGetHeaders = /** @class */ (function (_super) {
    __extends(CommitteeListCommitteesGetHeaders, _super);
    function CommitteeListCommitteesGetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" }),
        __metadata("design:type", String)
    ], CommitteeListCommitteesGetHeaders.prototype, "xApiKey", void 0);
    return CommitteeListCommitteesGetHeaders;
}(SpeakeasyBase));
export { CommitteeListCommitteesGetHeaders };
var CommitteeListCommitteesGetRequest = /** @class */ (function (_super) {
    __extends(CommitteeListCommitteesGetRequest, _super);
    function CommitteeListCommitteesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CommitteeListCommitteesGetQueryParams)
    ], CommitteeListCommitteesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CommitteeListCommitteesGetHeaders)
    ], CommitteeListCommitteesGetRequest.prototype, "headers", void 0);
    return CommitteeListCommitteesGetRequest;
}(SpeakeasyBase));
export { CommitteeListCommitteesGetRequest };
var CommitteeListCommitteesGetResponse = /** @class */ (function (_super) {
    __extends(CommitteeListCommitteesGetResponse, _super);
    function CommitteeListCommitteesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CommitteeList)
    ], CommitteeListCommitteesGetResponse.prototype, "committeeList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CommitteeListCommitteesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], CommitteeListCommitteesGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CommitteeListCommitteesGetResponse.prototype, "statusCode", void 0);
    return CommitteeListCommitteesGetResponse;
}(SpeakeasyBase));
export { CommitteeListCommitteesGetResponse };
