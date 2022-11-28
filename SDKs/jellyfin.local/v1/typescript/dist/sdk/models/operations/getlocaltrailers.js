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
var GetLocalTrailersPathParams = /** @class */ (function (_super) {
    __extends(GetLocalTrailersPathParams, _super);
    function GetLocalTrailersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], GetLocalTrailersPathParams.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GetLocalTrailersPathParams.prototype, "userId", void 0);
    return GetLocalTrailersPathParams;
}(SpeakeasyBase));
export { GetLocalTrailersPathParams };
var GetLocalTrailersSecurity = /** @class */ (function (_super) {
    __extends(GetLocalTrailersSecurity, _super);
    function GetLocalTrailersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetLocalTrailersSecurity.prototype, "customAuthentication", void 0);
    return GetLocalTrailersSecurity;
}(SpeakeasyBase));
export { GetLocalTrailersSecurity };
var GetLocalTrailersRequest = /** @class */ (function (_super) {
    __extends(GetLocalTrailersRequest, _super);
    function GetLocalTrailersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLocalTrailersPathParams)
    ], GetLocalTrailersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLocalTrailersSecurity)
    ], GetLocalTrailersRequest.prototype, "security", void 0);
    return GetLocalTrailersRequest;
}(SpeakeasyBase));
export { GetLocalTrailersRequest };
var GetLocalTrailersResponse = /** @class */ (function (_super) {
    __extends(GetLocalTrailersResponse, _super);
    function GetLocalTrailersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.BaseItemDto }),
        __metadata("design:type", Array)
    ], GetLocalTrailersResponse.prototype, "baseItemDtos", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLocalTrailersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLocalTrailersResponse.prototype, "statusCode", void 0);
    return GetLocalTrailersResponse;
}(SpeakeasyBase));
export { GetLocalTrailersResponse };
