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
var GetMgiMappingUsingGetPathParams = /** @class */ (function (_super) {
    __extends(GetMgiMappingUsingGetPathParams, _super);
    function GetMgiMappingUsingGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rgdId" }),
        __metadata("design:type", Number)
    ], GetMgiMappingUsingGetPathParams.prototype, "rgdId", void 0);
    return GetMgiMappingUsingGetPathParams;
}(SpeakeasyBase));
export { GetMgiMappingUsingGetPathParams };
var GetMgiMappingUsingGetRequest = /** @class */ (function (_super) {
    __extends(GetMgiMappingUsingGetRequest, _super);
    function GetMgiMappingUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMgiMappingUsingGetPathParams)
    ], GetMgiMappingUsingGetRequest.prototype, "pathParams", void 0);
    return GetMgiMappingUsingGetRequest;
}(SpeakeasyBase));
export { GetMgiMappingUsingGetRequest };
var GetMgiMappingUsingGetResponse = /** @class */ (function (_super) {
    __extends(GetMgiMappingUsingGetResponse, _super);
    function GetMgiMappingUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetMgiMappingUsingGetResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMgiMappingUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMgiMappingUsingGetResponse.prototype, "statusCode", void 0);
    return GetMgiMappingUsingGetResponse;
}(SpeakeasyBase));
export { GetMgiMappingUsingGetResponse };
