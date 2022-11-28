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
var RetrieveCreditTransfersPathParams = /** @class */ (function (_super) {
    __extends(RetrieveCreditTransfersPathParams, _super);
    function RetrieveCreditTransfersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api_key" }),
        __metadata("design:type", String)
    ], RetrieveCreditTransfersPathParams.prototype, "apiKey", void 0);
    return RetrieveCreditTransfersPathParams;
}(SpeakeasyBase));
export { RetrieveCreditTransfersPathParams };
var RetrieveCreditTransfersQueryParams = /** @class */ (function (_super) {
    __extends(RetrieveCreditTransfersQueryParams, _super);
    function RetrieveCreditTransfersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" }),
        __metadata("design:type", String)
    ], RetrieveCreditTransfersQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" }),
        __metadata("design:type", String)
    ], RetrieveCreditTransfersQueryParams.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subaccount" }),
        __metadata("design:type", String)
    ], RetrieveCreditTransfersQueryParams.prototype, "subaccount", void 0);
    return RetrieveCreditTransfersQueryParams;
}(SpeakeasyBase));
export { RetrieveCreditTransfersQueryParams };
var RetrieveCreditTransfersSecurity = /** @class */ (function (_super) {
    __extends(RetrieveCreditTransfersSecurity, _super);
    function RetrieveCreditTransfersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], RetrieveCreditTransfersSecurity.prototype, "basicAuth", void 0);
    return RetrieveCreditTransfersSecurity;
}(SpeakeasyBase));
export { RetrieveCreditTransfersSecurity };
var RetrieveCreditTransfers401ApplicationJson = /** @class */ (function (_super) {
    __extends(RetrieveCreditTransfers401ApplicationJson, _super);
    function RetrieveCreditTransfers401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], RetrieveCreditTransfers401ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], RetrieveCreditTransfers401ApplicationJson.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], RetrieveCreditTransfers401ApplicationJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveCreditTransfers401ApplicationJson.prototype, "type", void 0);
    return RetrieveCreditTransfers401ApplicationJson;
}(SpeakeasyBase));
export { RetrieveCreditTransfers401ApplicationJson };
// RetrieveCreditTransfers404ApplicationJson
/**
 * Invalid API Key
**/
var RetrieveCreditTransfers404ApplicationJson = /** @class */ (function (_super) {
    __extends(RetrieveCreditTransfers404ApplicationJson, _super);
    function RetrieveCreditTransfers404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], RetrieveCreditTransfers404ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], RetrieveCreditTransfers404ApplicationJson.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], RetrieveCreditTransfers404ApplicationJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveCreditTransfers404ApplicationJson.prototype, "type", void 0);
    return RetrieveCreditTransfers404ApplicationJson;
}(SpeakeasyBase));
export { RetrieveCreditTransfers404ApplicationJson };
var RetrieveCreditTransfersRequest = /** @class */ (function (_super) {
    __extends(RetrieveCreditTransfersRequest, _super);
    function RetrieveCreditTransfersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrieveCreditTransfersPathParams)
    ], RetrieveCreditTransfersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrieveCreditTransfersQueryParams)
    ], RetrieveCreditTransfersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrieveCreditTransfersSecurity)
    ], RetrieveCreditTransfersRequest.prototype, "security", void 0);
    return RetrieveCreditTransfersRequest;
}(SpeakeasyBase));
export { RetrieveCreditTransfersRequest };
var RetrieveCreditTransfersResponse = /** @class */ (function (_super) {
    __extends(RetrieveCreditTransfersResponse, _super);
    function RetrieveCreditTransfersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetrieveCreditTransfersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RetrieveCreditTransfersResponse.prototype, "listCreditTransfersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetrieveCreditTransfersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprovisionedErrorResponse)
    ], RetrieveCreditTransfersResponse.prototype, "unprovisionedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrieveCreditTransfers401ApplicationJson)
    ], RetrieveCreditTransfersResponse.prototype, "retrieveCreditTransfers401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrieveCreditTransfers404ApplicationJson)
    ], RetrieveCreditTransfersResponse.prototype, "retrieveCreditTransfers404ApplicationJsonObject", void 0);
    return RetrieveCreditTransfersResponse;
}(SpeakeasyBase));
export { RetrieveCreditTransfersResponse };
