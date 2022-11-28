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
export var TransportationIncentivesLawsOutputFormatEnum;
(function (TransportationIncentivesLawsOutputFormatEnum) {
    TransportationIncentivesLawsOutputFormatEnum["Json"] = "json";
    TransportationIncentivesLawsOutputFormatEnum["Xml"] = "xml";
    TransportationIncentivesLawsOutputFormatEnum["Csv"] = "csv";
})(TransportationIncentivesLawsOutputFormatEnum || (TransportationIncentivesLawsOutputFormatEnum = {}));
var TransportationIncentivesLawsPathParams = /** @class */ (function (_super) {
    __extends(TransportationIncentivesLawsPathParams, _super);
    function TransportationIncentivesLawsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=output_format" }),
        __metadata("design:type", String)
    ], TransportationIncentivesLawsPathParams.prototype, "outputFormat", void 0);
    return TransportationIncentivesLawsPathParams;
}(SpeakeasyBase));
export { TransportationIncentivesLawsPathParams };
var TransportationIncentivesLawsQueryParams = /** @class */ (function (_super) {
    __extends(TransportationIncentivesLawsQueryParams, _super);
    function TransportationIncentivesLawsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], TransportationIncentivesLawsQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expired" }),
        __metadata("design:type", Boolean)
    ], TransportationIncentivesLawsQueryParams.prototype, "expired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=incentive_type" }),
        __metadata("design:type", String)
    ], TransportationIncentivesLawsQueryParams.prototype, "incentiveType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jurisdiction" }),
        __metadata("design:type", String)
    ], TransportationIncentivesLawsQueryParams.prototype, "jurisdiction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyword" }),
        __metadata("design:type", String)
    ], TransportationIncentivesLawsQueryParams.prototype, "keyword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=law_type" }),
        __metadata("design:type", String)
    ], TransportationIncentivesLawsQueryParams.prototype, "lawType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], TransportationIncentivesLawsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=local" }),
        __metadata("design:type", Boolean)
    ], TransportationIncentivesLawsQueryParams.prototype, "local", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=poc" }),
        __metadata("design:type", Boolean)
    ], TransportationIncentivesLawsQueryParams.prototype, "poc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recent" }),
        __metadata("design:type", Boolean)
    ], TransportationIncentivesLawsQueryParams.prototype, "recent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=regulation_type" }),
        __metadata("design:type", String)
    ], TransportationIncentivesLawsQueryParams.prototype, "regulationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=technology" }),
        __metadata("design:type", String)
    ], TransportationIncentivesLawsQueryParams.prototype, "technology", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_type" }),
        __metadata("design:type", String)
    ], TransportationIncentivesLawsQueryParams.prototype, "userType", void 0);
    return TransportationIncentivesLawsQueryParams;
}(SpeakeasyBase));
export { TransportationIncentivesLawsQueryParams };
var TransportationIncentivesLawsRequest = /** @class */ (function (_super) {
    __extends(TransportationIncentivesLawsRequest, _super);
    function TransportationIncentivesLawsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TransportationIncentivesLawsPathParams)
    ], TransportationIncentivesLawsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TransportationIncentivesLawsQueryParams)
    ], TransportationIncentivesLawsRequest.prototype, "queryParams", void 0);
    return TransportationIncentivesLawsRequest;
}(SpeakeasyBase));
export { TransportationIncentivesLawsRequest };
var TransportationIncentivesLawsResponse = /** @class */ (function (_super) {
    __extends(TransportationIncentivesLawsResponse, _super);
    function TransportationIncentivesLawsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], TransportationIncentivesLawsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TransportationIncentivesLawsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TransportationIncentivesLawsResponse.prototype, "statusCode", void 0);
    return TransportationIncentivesLawsResponse;
}(SpeakeasyBase));
export { TransportationIncentivesLawsResponse };
