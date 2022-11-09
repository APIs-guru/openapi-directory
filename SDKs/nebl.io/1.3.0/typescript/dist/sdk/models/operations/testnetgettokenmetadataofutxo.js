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
var TestnetGetTokenMetadataOfUtxoPathParams = /** @class */ (function (_super) {
    __extends(TestnetGetTokenMetadataOfUtxoPathParams, _super);
    function TestnetGetTokenMetadataOfUtxoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=tokenid" }),
        __metadata("design:type", String)
    ], TestnetGetTokenMetadataOfUtxoPathParams.prototype, "tokenid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=utxo" }),
        __metadata("design:type", String)
    ], TestnetGetTokenMetadataOfUtxoPathParams.prototype, "utxo", void 0);
    return TestnetGetTokenMetadataOfUtxoPathParams;
}(SpeakeasyBase));
export { TestnetGetTokenMetadataOfUtxoPathParams };
var TestnetGetTokenMetadataOfUtxoQueryParams = /** @class */ (function (_super) {
    __extends(TestnetGetTokenMetadataOfUtxoQueryParams, _super);
    function TestnetGetTokenMetadataOfUtxoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=verbosity" }),
        __metadata("design:type", Number)
    ], TestnetGetTokenMetadataOfUtxoQueryParams.prototype, "verbosity", void 0);
    return TestnetGetTokenMetadataOfUtxoQueryParams;
}(SpeakeasyBase));
export { TestnetGetTokenMetadataOfUtxoQueryParams };
var TestnetGetTokenMetadataOfUtxoRequest = /** @class */ (function (_super) {
    __extends(TestnetGetTokenMetadataOfUtxoRequest, _super);
    function TestnetGetTokenMetadataOfUtxoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", TestnetGetTokenMetadataOfUtxoPathParams)
    ], TestnetGetTokenMetadataOfUtxoRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TestnetGetTokenMetadataOfUtxoQueryParams)
    ], TestnetGetTokenMetadataOfUtxoRequest.prototype, "queryParams", void 0);
    return TestnetGetTokenMetadataOfUtxoRequest;
}(SpeakeasyBase));
export { TestnetGetTokenMetadataOfUtxoRequest };
var TestnetGetTokenMetadataOfUtxoResponse = /** @class */ (function (_super) {
    __extends(TestnetGetTokenMetadataOfUtxoResponse, _super);
    function TestnetGetTokenMetadataOfUtxoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], TestnetGetTokenMetadataOfUtxoResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Error)
    ], TestnetGetTokenMetadataOfUtxoResponse.prototype, "error", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], TestnetGetTokenMetadataOfUtxoResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetTokenMetadataResponse)
    ], TestnetGetTokenMetadataOfUtxoResponse.prototype, "getTokenMetadataResponse", void 0);
    return TestnetGetTokenMetadataOfUtxoResponse;
}(SpeakeasyBase));
export { TestnetGetTokenMetadataOfUtxoResponse };
