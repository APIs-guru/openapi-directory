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
var GetQtlListByPositionUsingGetPathParams = /** @class */ (function (_super) {
    __extends(GetQtlListByPositionUsingGetPathParams, _super);
    function GetQtlListByPositionUsingGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chr" }),
        __metadata("design:type", String)
    ], GetQtlListByPositionUsingGetPathParams.prototype, "chr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mapKey" }),
        __metadata("design:type", Number)
    ], GetQtlListByPositionUsingGetPathParams.prototype, "mapKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=start" }),
        __metadata("design:type", Number)
    ], GetQtlListByPositionUsingGetPathParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stop" }),
        __metadata("design:type", Number)
    ], GetQtlListByPositionUsingGetPathParams.prototype, "stop", void 0);
    return GetQtlListByPositionUsingGetPathParams;
}(SpeakeasyBase));
export { GetQtlListByPositionUsingGetPathParams };
var GetQtlListByPositionUsingGetRequest = /** @class */ (function (_super) {
    __extends(GetQtlListByPositionUsingGetRequest, _super);
    function GetQtlListByPositionUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQtlListByPositionUsingGetPathParams)
    ], GetQtlListByPositionUsingGetRequest.prototype, "pathParams", void 0);
    return GetQtlListByPositionUsingGetRequest;
}(SpeakeasyBase));
export { GetQtlListByPositionUsingGetRequest };
var GetQtlListByPositionUsingGetResponse = /** @class */ (function (_super) {
    __extends(GetQtlListByPositionUsingGetResponse, _super);
    function GetQtlListByPositionUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetQtlListByPositionUsingGetResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetQtlListByPositionUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetQtlListByPositionUsingGetResponse.prototype, "statusCode", void 0);
    return GetQtlListByPositionUsingGetResponse;
}(SpeakeasyBase));
export { GetQtlListByPositionUsingGetResponse };
