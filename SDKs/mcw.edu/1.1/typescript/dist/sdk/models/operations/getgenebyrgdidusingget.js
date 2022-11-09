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
var GetGeneByRgdIdUsingGetPathParams = /** @class */ (function (_super) {
    __extends(GetGeneByRgdIdUsingGetPathParams, _super);
    function GetGeneByRgdIdUsingGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=rgdId" }),
        __metadata("design:type", Number)
    ], GetGeneByRgdIdUsingGetPathParams.prototype, "rgdId", void 0);
    return GetGeneByRgdIdUsingGetPathParams;
}(SpeakeasyBase));
export { GetGeneByRgdIdUsingGetPathParams };
var GetGeneByRgdIdUsingGetRequest = /** @class */ (function (_super) {
    __extends(GetGeneByRgdIdUsingGetRequest, _super);
    function GetGeneByRgdIdUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetGeneByRgdIdUsingGetPathParams)
    ], GetGeneByRgdIdUsingGetRequest.prototype, "pathParams", void 0);
    return GetGeneByRgdIdUsingGetRequest;
}(SpeakeasyBase));
export { GetGeneByRgdIdUsingGetRequest };
var GetGeneByRgdIdUsingGetResponse = /** @class */ (function (_super) {
    __extends(GetGeneByRgdIdUsingGetResponse, _super);
    function GetGeneByRgdIdUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetGeneByRgdIdUsingGetResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetGeneByRgdIdUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetGeneByRgdIdUsingGetResponse.prototype, "statusCode", void 0);
    return GetGeneByRgdIdUsingGetResponse;
}(SpeakeasyBase));
export { GetGeneByRgdIdUsingGetResponse };
