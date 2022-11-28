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
import * as shared from "../shared";
var PostCapabilitiesQueryParams = /** @class */ (function (_super) {
    __extends(PostCapabilitiesQueryParams, _super);
    function PostCapabilitiesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], PostCapabilitiesQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=playableMediaTypes" }),
        __metadata("design:type", Array)
    ], PostCapabilitiesQueryParams.prototype, "playableMediaTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportedCommands" }),
        __metadata("design:type", Array)
    ], PostCapabilitiesQueryParams.prototype, "supportedCommands", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsMediaControl" }),
        __metadata("design:type", Boolean)
    ], PostCapabilitiesQueryParams.prototype, "supportsMediaControl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsPersistentIdentifier" }),
        __metadata("design:type", Boolean)
    ], PostCapabilitiesQueryParams.prototype, "supportsPersistentIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsSync" }),
        __metadata("design:type", Boolean)
    ], PostCapabilitiesQueryParams.prototype, "supportsSync", void 0);
    return PostCapabilitiesQueryParams;
}(SpeakeasyBase));
export { PostCapabilitiesQueryParams };
var PostCapabilitiesSecurity = /** @class */ (function (_super) {
    __extends(PostCapabilitiesSecurity, _super);
    function PostCapabilitiesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], PostCapabilitiesSecurity.prototype, "customAuthentication", void 0);
    return PostCapabilitiesSecurity;
}(SpeakeasyBase));
export { PostCapabilitiesSecurity };
var PostCapabilitiesRequest = /** @class */ (function (_super) {
    __extends(PostCapabilitiesRequest, _super);
    function PostCapabilitiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCapabilitiesQueryParams)
    ], PostCapabilitiesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCapabilitiesSecurity)
    ], PostCapabilitiesRequest.prototype, "security", void 0);
    return PostCapabilitiesRequest;
}(SpeakeasyBase));
export { PostCapabilitiesRequest };
var PostCapabilitiesResponse = /** @class */ (function (_super) {
    __extends(PostCapabilitiesResponse, _super);
    function PostCapabilitiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCapabilitiesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCapabilitiesResponse.prototype, "statusCode", void 0);
    return PostCapabilitiesResponse;
}(SpeakeasyBase));
export { PostCapabilitiesResponse };
