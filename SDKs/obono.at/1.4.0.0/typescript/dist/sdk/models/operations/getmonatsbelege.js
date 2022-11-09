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
var GetMonatsbelegePathParams = /** @class */ (function (_super) {
    __extends(GetMonatsbelegePathParams, _super);
    function GetMonatsbelegePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=registrierkasseUuid" }),
        __metadata("design:type", String)
    ], GetMonatsbelegePathParams.prototype, "registrierkasseUuid", void 0);
    return GetMonatsbelegePathParams;
}(SpeakeasyBase));
export { GetMonatsbelegePathParams };
var GetMonatsbelegeQueryParams = /** @class */ (function (_super) {
    __extends(GetMonatsbelegeQueryParams, _super);
    function GetMonatsbelegeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=month" }),
        __metadata("design:type", Number)
    ], GetMonatsbelegeQueryParams.prototype, "month", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", Number)
    ], GetMonatsbelegeQueryParams.prototype, "year", void 0);
    return GetMonatsbelegeQueryParams;
}(SpeakeasyBase));
export { GetMonatsbelegeQueryParams };
var GetMonatsbelegeRequest = /** @class */ (function (_super) {
    __extends(GetMonatsbelegeRequest, _super);
    function GetMonatsbelegeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetMonatsbelegePathParams)
    ], GetMonatsbelegeRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetMonatsbelegeQueryParams)
    ], GetMonatsbelegeRequest.prototype, "queryParams", void 0);
    return GetMonatsbelegeRequest;
}(SpeakeasyBase));
export { GetMonatsbelegeRequest };
var GetMonatsbelegeResponse = /** @class */ (function (_super) {
    __extends(GetMonatsbelegeResponse, _super);
    function GetMonatsbelegeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetMonatsbelegeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata({ elemType: shared.Monatsbeleg }),
        __metadata("design:type", Array)
    ], GetMonatsbelegeResponse.prototype, "monatsbelegs", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetMonatsbelegeResponse.prototype, "statusCode", void 0);
    return GetMonatsbelegeResponse;
}(SpeakeasyBase));
export { GetMonatsbelegeResponse };
