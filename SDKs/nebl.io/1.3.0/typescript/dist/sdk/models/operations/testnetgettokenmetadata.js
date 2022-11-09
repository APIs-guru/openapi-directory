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
var TestnetGetTokenMetadataPathParams = /** @class */ (function (_super) {
    __extends(TestnetGetTokenMetadataPathParams, _super);
    function TestnetGetTokenMetadataPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=tokenid" }),
        __metadata("design:type", String)
    ], TestnetGetTokenMetadataPathParams.prototype, "tokenid", void 0);
    return TestnetGetTokenMetadataPathParams;
}(SpeakeasyBase));
export { TestnetGetTokenMetadataPathParams };
var TestnetGetTokenMetadataQueryParams = /** @class */ (function (_super) {
    __extends(TestnetGetTokenMetadataQueryParams, _super);
    function TestnetGetTokenMetadataQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=verbosity" }),
        __metadata("design:type", Number)
    ], TestnetGetTokenMetadataQueryParams.prototype, "verbosity", void 0);
    return TestnetGetTokenMetadataQueryParams;
}(SpeakeasyBase));
export { TestnetGetTokenMetadataQueryParams };
var TestnetGetTokenMetadataRequest = /** @class */ (function (_super) {
    __extends(TestnetGetTokenMetadataRequest, _super);
    function TestnetGetTokenMetadataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", TestnetGetTokenMetadataPathParams)
    ], TestnetGetTokenMetadataRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TestnetGetTokenMetadataQueryParams)
    ], TestnetGetTokenMetadataRequest.prototype, "queryParams", void 0);
    return TestnetGetTokenMetadataRequest;
}(SpeakeasyBase));
export { TestnetGetTokenMetadataRequest };
var TestnetGetTokenMetadataResponse = /** @class */ (function (_super) {
    __extends(TestnetGetTokenMetadataResponse, _super);
    function TestnetGetTokenMetadataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], TestnetGetTokenMetadataResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Error)
    ], TestnetGetTokenMetadataResponse.prototype, "error", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], TestnetGetTokenMetadataResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetTokenMetadataResponse)
    ], TestnetGetTokenMetadataResponse.prototype, "getTokenMetadataResponse", void 0);
    return TestnetGetTokenMetadataResponse;
}(SpeakeasyBase));
export { TestnetGetTokenMetadataResponse };
