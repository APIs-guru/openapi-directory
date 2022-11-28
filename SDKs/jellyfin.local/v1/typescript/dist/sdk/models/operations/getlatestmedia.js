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
var GetLatestMediaPathParams = /** @class */ (function (_super) {
    __extends(GetLatestMediaPathParams, _super);
    function GetLatestMediaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GetLatestMediaPathParams.prototype, "userId", void 0);
    return GetLatestMediaPathParams;
}(SpeakeasyBase));
export { GetLatestMediaPathParams };
var GetLatestMediaQueryParams = /** @class */ (function (_super) {
    __extends(GetLatestMediaQueryParams, _super);
    function GetLatestMediaQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImageTypes" }),
        __metadata("design:type", Array)
    ], GetLatestMediaQueryParams.prototype, "enableImageTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImages" }),
        __metadata("design:type", Boolean)
    ], GetLatestMediaQueryParams.prototype, "enableImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableUserData" }),
        __metadata("design:type", Boolean)
    ], GetLatestMediaQueryParams.prototype, "enableUserData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", Array)
    ], GetLatestMediaQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupItems" }),
        __metadata("design:type", Boolean)
    ], GetLatestMediaQueryParams.prototype, "groupItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imageTypeLimit" }),
        __metadata("design:type", Number)
    ], GetLatestMediaQueryParams.prototype, "imageTypeLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeItemTypes" }),
        __metadata("design:type", Array)
    ], GetLatestMediaQueryParams.prototype, "includeItemTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isPlayed" }),
        __metadata("design:type", Boolean)
    ], GetLatestMediaQueryParams.prototype, "isPlayed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetLatestMediaQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parentId" }),
        __metadata("design:type", String)
    ], GetLatestMediaQueryParams.prototype, "parentId", void 0);
    return GetLatestMediaQueryParams;
}(SpeakeasyBase));
export { GetLatestMediaQueryParams };
var GetLatestMediaSecurity = /** @class */ (function (_super) {
    __extends(GetLatestMediaSecurity, _super);
    function GetLatestMediaSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetLatestMediaSecurity.prototype, "customAuthentication", void 0);
    return GetLatestMediaSecurity;
}(SpeakeasyBase));
export { GetLatestMediaSecurity };
var GetLatestMediaRequest = /** @class */ (function (_super) {
    __extends(GetLatestMediaRequest, _super);
    function GetLatestMediaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLatestMediaPathParams)
    ], GetLatestMediaRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLatestMediaQueryParams)
    ], GetLatestMediaRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLatestMediaSecurity)
    ], GetLatestMediaRequest.prototype, "security", void 0);
    return GetLatestMediaRequest;
}(SpeakeasyBase));
export { GetLatestMediaRequest };
var GetLatestMediaResponse = /** @class */ (function (_super) {
    __extends(GetLatestMediaResponse, _super);
    function GetLatestMediaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.BaseItemDto }),
        __metadata("design:type", Array)
    ], GetLatestMediaResponse.prototype, "baseItemDtos", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLatestMediaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLatestMediaResponse.prototype, "statusCode", void 0);
    return GetLatestMediaResponse;
}(SpeakeasyBase));
export { GetLatestMediaResponse };
