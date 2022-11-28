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
var PutGroupGroupTitlePathParams = /** @class */ (function (_super) {
    __extends(PutGroupGroupTitlePathParams, _super);
    function PutGroupGroupTitlePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_title" }),
        __metadata("design:type", String)
    ], PutGroupGroupTitlePathParams.prototype, "groupTitle", void 0);
    return PutGroupGroupTitlePathParams;
}(SpeakeasyBase));
export { PutGroupGroupTitlePathParams };
var PutGroupGroupTitleSecurity = /** @class */ (function (_super) {
    __extends(PutGroupGroupTitleSecurity, _super);
    function PutGroupGroupTitleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], PutGroupGroupTitleSecurity.prototype, "basicAuthentication", void 0);
    return PutGroupGroupTitleSecurity;
}(SpeakeasyBase));
export { PutGroupGroupTitleSecurity };
var PutGroupGroupTitleRequest = /** @class */ (function (_super) {
    __extends(PutGroupGroupTitleRequest, _super);
    function PutGroupGroupTitleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutGroupGroupTitlePathParams)
    ], PutGroupGroupTitleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PutGroupGroupTitleRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutGroupGroupTitleSecurity)
    ], PutGroupGroupTitleRequest.prototype, "security", void 0);
    return PutGroupGroupTitleRequest;
}(SpeakeasyBase));
export { PutGroupGroupTitleRequest };
var PutGroupGroupTitleResponse = /** @class */ (function (_super) {
    __extends(PutGroupGroupTitleResponse, _super);
    function PutGroupGroupTitleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PutGroupGroupTitleResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutGroupGroupTitleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutGroupGroupTitleResponse.prototype, "statusCode", void 0);
    return PutGroupGroupTitleResponse;
}(SpeakeasyBase));
export { PutGroupGroupTitleResponse };
