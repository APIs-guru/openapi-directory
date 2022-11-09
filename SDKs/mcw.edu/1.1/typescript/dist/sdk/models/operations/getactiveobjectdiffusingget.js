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
var GetActiveObjectDiffUsingGetPathParams = /** @class */ (function (_super) {
    __extends(GetActiveObjectDiffUsingGetPathParams, _super);
    function GetActiveObjectDiffUsingGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=dateFromYYYYMMDD" }),
        __metadata("design:type", String)
    ], GetActiveObjectDiffUsingGetPathParams.prototype, "dateFromYyyymmdd", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=dateToYYYYMMDD" }),
        __metadata("design:type", String)
    ], GetActiveObjectDiffUsingGetPathParams.prototype, "dateToYyyymmdd", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" }),
        __metadata("design:type", Number)
    ], GetActiveObjectDiffUsingGetPathParams.prototype, "speciesTypeKey", void 0);
    return GetActiveObjectDiffUsingGetPathParams;
}(SpeakeasyBase));
export { GetActiveObjectDiffUsingGetPathParams };
var GetActiveObjectDiffUsingGetRequest = /** @class */ (function (_super) {
    __extends(GetActiveObjectDiffUsingGetRequest, _super);
    function GetActiveObjectDiffUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetActiveObjectDiffUsingGetPathParams)
    ], GetActiveObjectDiffUsingGetRequest.prototype, "pathParams", void 0);
    return GetActiveObjectDiffUsingGetRequest;
}(SpeakeasyBase));
export { GetActiveObjectDiffUsingGetRequest };
var GetActiveObjectDiffUsingGetResponse = /** @class */ (function (_super) {
    __extends(GetActiveObjectDiffUsingGetResponse, _super);
    function GetActiveObjectDiffUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetActiveObjectDiffUsingGetResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetActiveObjectDiffUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetActiveObjectDiffUsingGetResponse.prototype, "statusCode", void 0);
    return GetActiveObjectDiffUsingGetResponse;
}(SpeakeasyBase));
export { GetActiveObjectDiffUsingGetResponse };
