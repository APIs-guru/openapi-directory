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
var PatchDevelopersDeveloperIdPathParams = /** @class */ (function (_super) {
    __extends(PatchDevelopersDeveloperIdPathParams, _super);
    function PatchDevelopersDeveloperIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=developerId" }),
        __metadata("design:type", String)
    ], PatchDevelopersDeveloperIdPathParams.prototype, "developerId", void 0);
    return PatchDevelopersDeveloperIdPathParams;
}(SpeakeasyBase));
export { PatchDevelopersDeveloperIdPathParams };
var PatchDevelopersDeveloperIdQueryParams = /** @class */ (function (_super) {
    __extends(PatchDevelopersDeveloperIdQueryParams, _super);
    function PatchDevelopersDeveloperIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customData" }),
        __metadata("design:type", String)
    ], PatchDevelopersDeveloperIdQueryParams.prototype, "customData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" }),
        __metadata("design:type", String)
    ], PatchDevelopersDeveloperIdQueryParams.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], PatchDevelopersDeveloperIdQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], PatchDevelopersDeveloperIdQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=username" }),
        __metadata("design:type", String)
    ], PatchDevelopersDeveloperIdQueryParams.prototype, "username", void 0);
    return PatchDevelopersDeveloperIdQueryParams;
}(SpeakeasyBase));
export { PatchDevelopersDeveloperIdQueryParams };
var PatchDevelopersDeveloperIdRequest = /** @class */ (function (_super) {
    __extends(PatchDevelopersDeveloperIdRequest, _super);
    function PatchDevelopersDeveloperIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchDevelopersDeveloperIdPathParams)
    ], PatchDevelopersDeveloperIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchDevelopersDeveloperIdQueryParams)
    ], PatchDevelopersDeveloperIdRequest.prototype, "queryParams", void 0);
    return PatchDevelopersDeveloperIdRequest;
}(SpeakeasyBase));
export { PatchDevelopersDeveloperIdRequest };
var PatchDevelopersDeveloperIdResponse = /** @class */ (function (_super) {
    __extends(PatchDevelopersDeveloperIdResponse, _super);
    function PatchDevelopersDeveloperIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PatchDevelopersDeveloperIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchDevelopersDeveloperIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchDevelopersDeveloperIdResponse.prototype, "statusCode", void 0);
    return PatchDevelopersDeveloperIdResponse;
}(SpeakeasyBase));
export { PatchDevelopersDeveloperIdResponse };
