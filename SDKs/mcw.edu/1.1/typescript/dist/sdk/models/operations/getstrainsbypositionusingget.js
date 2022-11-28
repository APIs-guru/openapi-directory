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
var GetStrainsByPositionUsingGetPathParams = /** @class */ (function (_super) {
    __extends(GetStrainsByPositionUsingGetPathParams, _super);
    function GetStrainsByPositionUsingGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chr" }),
        __metadata("design:type", String)
    ], GetStrainsByPositionUsingGetPathParams.prototype, "chr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mapKey" }),
        __metadata("design:type", Number)
    ], GetStrainsByPositionUsingGetPathParams.prototype, "mapKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=start" }),
        __metadata("design:type", Number)
    ], GetStrainsByPositionUsingGetPathParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stop" }),
        __metadata("design:type", Number)
    ], GetStrainsByPositionUsingGetPathParams.prototype, "stop", void 0);
    return GetStrainsByPositionUsingGetPathParams;
}(SpeakeasyBase));
export { GetStrainsByPositionUsingGetPathParams };
var GetStrainsByPositionUsingGetRequest = /** @class */ (function (_super) {
    __extends(GetStrainsByPositionUsingGetRequest, _super);
    function GetStrainsByPositionUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStrainsByPositionUsingGetPathParams)
    ], GetStrainsByPositionUsingGetRequest.prototype, "pathParams", void 0);
    return GetStrainsByPositionUsingGetRequest;
}(SpeakeasyBase));
export { GetStrainsByPositionUsingGetRequest };
var GetStrainsByPositionUsingGetResponse = /** @class */ (function (_super) {
    __extends(GetStrainsByPositionUsingGetResponse, _super);
    function GetStrainsByPositionUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetStrainsByPositionUsingGetResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetStrainsByPositionUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetStrainsByPositionUsingGetResponse.prototype, "statusCode", void 0);
    return GetStrainsByPositionUsingGetResponse;
}(SpeakeasyBase));
export { GetStrainsByPositionUsingGetResponse };
