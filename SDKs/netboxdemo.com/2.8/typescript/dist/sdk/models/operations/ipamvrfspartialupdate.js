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
var IpamVrfsPartialUpdatePathParams = /** @class */ (function (_super) {
    __extends(IpamVrfsPartialUpdatePathParams, _super);
    function IpamVrfsPartialUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], IpamVrfsPartialUpdatePathParams.prototype, "id", void 0);
    return IpamVrfsPartialUpdatePathParams;
}(SpeakeasyBase));
export { IpamVrfsPartialUpdatePathParams };
var IpamVrfsPartialUpdateRequest = /** @class */ (function (_super) {
    __extends(IpamVrfsPartialUpdateRequest, _super);
    function IpamVrfsPartialUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IpamVrfsPartialUpdatePathParams)
    ], IpamVrfsPartialUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.WritableVrfInput)
    ], IpamVrfsPartialUpdateRequest.prototype, "request", void 0);
    return IpamVrfsPartialUpdateRequest;
}(SpeakeasyBase));
export { IpamVrfsPartialUpdateRequest };
var IpamVrfsPartialUpdateResponse = /** @class */ (function (_super) {
    __extends(IpamVrfsPartialUpdateResponse, _super);
    function IpamVrfsPartialUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IpamVrfsPartialUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IpamVrfsPartialUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Vrf)
    ], IpamVrfsPartialUpdateResponse.prototype, "vrf", void 0);
    return IpamVrfsPartialUpdateResponse;
}(SpeakeasyBase));
export { IpamVrfsPartialUpdateResponse };
