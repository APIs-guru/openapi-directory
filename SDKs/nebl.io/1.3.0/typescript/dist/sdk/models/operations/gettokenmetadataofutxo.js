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
var GetTokenMetadataOfUtxoPathParams = /** @class */ (function (_super) {
    __extends(GetTokenMetadataOfUtxoPathParams, _super);
    function GetTokenMetadataOfUtxoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=tokenid" }),
        __metadata("design:type", String)
    ], GetTokenMetadataOfUtxoPathParams.prototype, "tokenid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=utxo" }),
        __metadata("design:type", String)
    ], GetTokenMetadataOfUtxoPathParams.prototype, "utxo", void 0);
    return GetTokenMetadataOfUtxoPathParams;
}(SpeakeasyBase));
export { GetTokenMetadataOfUtxoPathParams };
var GetTokenMetadataOfUtxoQueryParams = /** @class */ (function (_super) {
    __extends(GetTokenMetadataOfUtxoQueryParams, _super);
    function GetTokenMetadataOfUtxoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=verbosity" }),
        __metadata("design:type", Number)
    ], GetTokenMetadataOfUtxoQueryParams.prototype, "verbosity", void 0);
    return GetTokenMetadataOfUtxoQueryParams;
}(SpeakeasyBase));
export { GetTokenMetadataOfUtxoQueryParams };
var GetTokenMetadataOfUtxoRequest = /** @class */ (function (_super) {
    __extends(GetTokenMetadataOfUtxoRequest, _super);
    function GetTokenMetadataOfUtxoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetTokenMetadataOfUtxoPathParams)
    ], GetTokenMetadataOfUtxoRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetTokenMetadataOfUtxoQueryParams)
    ], GetTokenMetadataOfUtxoRequest.prototype, "queryParams", void 0);
    return GetTokenMetadataOfUtxoRequest;
}(SpeakeasyBase));
export { GetTokenMetadataOfUtxoRequest };
var GetTokenMetadataOfUtxoResponse = /** @class */ (function (_super) {
    __extends(GetTokenMetadataOfUtxoResponse, _super);
    function GetTokenMetadataOfUtxoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetTokenMetadataOfUtxoResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Error)
    ], GetTokenMetadataOfUtxoResponse.prototype, "error", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetTokenMetadataOfUtxoResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetTokenMetadataResponse)
    ], GetTokenMetadataOfUtxoResponse.prototype, "getTokenMetadataResponse", void 0);
    return GetTokenMetadataOfUtxoResponse;
}(SpeakeasyBase));
export { GetTokenMetadataOfUtxoResponse };
