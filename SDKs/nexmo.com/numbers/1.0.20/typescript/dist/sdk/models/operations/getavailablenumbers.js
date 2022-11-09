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
export var GetAvailableNumbersFeaturesEnum;
(function (GetAvailableNumbersFeaturesEnum) {
    GetAvailableNumbersFeaturesEnum["Sms"] = "SMS";
    GetAvailableNumbersFeaturesEnum["Voice"] = "VOICE";
    GetAvailableNumbersFeaturesEnum["SmsVoice"] = "SMS,VOICE";
    GetAvailableNumbersFeaturesEnum["Mms"] = "MMS";
    GetAvailableNumbersFeaturesEnum["SmsMms"] = "SMS,MMS";
    GetAvailableNumbersFeaturesEnum["VoiceMms"] = "VOICE,MMS";
    GetAvailableNumbersFeaturesEnum["SmsMmsVoice"] = "SMS,MMS,VOICE";
})(GetAvailableNumbersFeaturesEnum || (GetAvailableNumbersFeaturesEnum = {}));
var GetAvailableNumbersQueryParams = /** @class */ (function (_super) {
    __extends(GetAvailableNumbersQueryParams, _super);
    function GetAvailableNumbersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], GetAvailableNumbersQueryParams.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=features" }),
        __metadata("design:type", String)
    ], GetAvailableNumbersQueryParams.prototype, "features", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=index" }),
        __metadata("design:type", Number)
    ], GetAvailableNumbersQueryParams.prototype, "index", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pattern" }),
        __metadata("design:type", String)
    ], GetAvailableNumbersQueryParams.prototype, "pattern", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search_pattern" }),
        __metadata("design:type", Number)
    ], GetAvailableNumbersQueryParams.prototype, "searchPattern", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=size" }),
        __metadata("design:type", Number)
    ], GetAvailableNumbersQueryParams.prototype, "size", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetAvailableNumbersQueryParams.prototype, "type", void 0);
    return GetAvailableNumbersQueryParams;
}(SpeakeasyBase));
export { GetAvailableNumbersQueryParams };
var GetAvailableNumbersRequest = /** @class */ (function (_super) {
    __extends(GetAvailableNumbersRequest, _super);
    function GetAvailableNumbersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAvailableNumbersQueryParams)
    ], GetAvailableNumbersRequest.prototype, "queryParams", void 0);
    return GetAvailableNumbersRequest;
}(SpeakeasyBase));
export { GetAvailableNumbersRequest };
var GetAvailableNumbersResponse = /** @class */ (function (_super) {
    __extends(GetAvailableNumbersResponse, _super);
    function GetAvailableNumbersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetAvailableNumbersResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAvailableNumbersResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAvailableNumbersResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AccountUnauthorized)
    ], GetAvailableNumbersResponse.prototype, "accountUnauthorized", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AvailableNumbers)
    ], GetAvailableNumbersResponse.prototype, "availableNumbers", void 0);
    return GetAvailableNumbersResponse;
}(SpeakeasyBase));
export { GetAvailableNumbersResponse };
