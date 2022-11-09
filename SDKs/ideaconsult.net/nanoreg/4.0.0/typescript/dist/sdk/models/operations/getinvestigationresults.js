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
var GetInvestigationResultsPathParams = /** @class */ (function (_super) {
    __extends(GetInvestigationResultsPathParams, _super);
    function GetInvestigationResultsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=db" }),
        __metadata("design:type", String)
    ], GetInvestigationResultsPathParams.prototype, "db", void 0);
    return GetInvestigationResultsPathParams;
}(SpeakeasyBase));
export { GetInvestigationResultsPathParams };
export var GetInvestigationResultsTypeEnum;
(function (GetInvestigationResultsTypeEnum) {
    GetInvestigationResultsTypeEnum["Byinvestigation"] = "byinvestigation";
    GetInvestigationResultsTypeEnum["Byassay"] = "byassay";
    GetInvestigationResultsTypeEnum["Bysubstance"] = "bysubstance";
    GetInvestigationResultsTypeEnum["Byprovider"] = "byprovider";
    GetInvestigationResultsTypeEnum["Bycitation"] = "bycitation";
    GetInvestigationResultsTypeEnum["Bystudytype"] = "bystudytype";
    GetInvestigationResultsTypeEnum["BystructureInchikey"] = "bystructure_inchikey";
    GetInvestigationResultsTypeEnum["BystructureSmiles"] = "bystructure_smiles";
    GetInvestigationResultsTypeEnum["BystructureName"] = "bystructure_name";
    GetInvestigationResultsTypeEnum["BysubstanceName"] = "bysubstance_name";
    GetInvestigationResultsTypeEnum["BysubstanceType"] = "bysubstance_type";
})(GetInvestigationResultsTypeEnum || (GetInvestigationResultsTypeEnum = {}));
var GetInvestigationResultsQueryParams = /** @class */ (function (_super) {
    __extends(GetInvestigationResultsQueryParams, _super);
    function GetInvestigationResultsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], GetInvestigationResultsQueryParams.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=inchikey" }),
        __metadata("design:type", String)
    ], GetInvestigationResultsQueryParams.prototype, "inchikey", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetInvestigationResultsQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetInvestigationResultsQueryParams.prototype, "pagesize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], GetInvestigationResultsQueryParams.prototype, "search", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetInvestigationResultsQueryParams.prototype, "type", void 0);
    return GetInvestigationResultsQueryParams;
}(SpeakeasyBase));
export { GetInvestigationResultsQueryParams };
var GetInvestigationResultsRequest = /** @class */ (function (_super) {
    __extends(GetInvestigationResultsRequest, _super);
    function GetInvestigationResultsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetInvestigationResultsPathParams)
    ], GetInvestigationResultsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetInvestigationResultsQueryParams)
    ], GetInvestigationResultsRequest.prototype, "queryParams", void 0);
    return GetInvestigationResultsRequest;
}(SpeakeasyBase));
export { GetInvestigationResultsRequest };
var GetInvestigationResultsResponse = /** @class */ (function (_super) {
    __extends(GetInvestigationResultsResponse, _super);
    function GetInvestigationResultsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetInvestigationResultsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetInvestigationResultsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Investigation)
    ], GetInvestigationResultsResponse.prototype, "investigation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetInvestigationResultsResponse.prototype, "statusCode", void 0);
    return GetInvestigationResultsResponse;
}(SpeakeasyBase));
export { GetInvestigationResultsResponse };
