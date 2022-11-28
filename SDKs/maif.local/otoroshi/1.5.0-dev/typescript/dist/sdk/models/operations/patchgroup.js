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
var PatchGroupPathParams = /** @class */ (function (_super) {
    __extends(PatchGroupPathParams, _super);
    function PatchGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceGroupId" }),
        __metadata("design:type", String)
    ], PatchGroupPathParams.prototype, "serviceGroupId", void 0);
    return PatchGroupPathParams;
}(SpeakeasyBase));
export { PatchGroupPathParams };
var PatchGroupSecurity = /** @class */ (function (_super) {
    __extends(PatchGroupSecurity, _super);
    function PatchGroupSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeOtoroshiAuth)
    ], PatchGroupSecurity.prototype, "otoroshiAuth", void 0);
    return PatchGroupSecurity;
}(SpeakeasyBase));
export { PatchGroupSecurity };
var PatchGroupRequest = /** @class */ (function (_super) {
    __extends(PatchGroupRequest, _super);
    function PatchGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchGroupPathParams)
    ], PatchGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.Patch }),
        __metadata("design:type", Array)
    ], PatchGroupRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchGroupSecurity)
    ], PatchGroupRequest.prototype, "security", void 0);
    return PatchGroupRequest;
}(SpeakeasyBase));
export { PatchGroupRequest };
var PatchGroupResponse = /** @class */ (function (_super) {
    __extends(PatchGroupResponse, _super);
    function PatchGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Group)
    ], PatchGroupResponse.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchGroupResponse.prototype, "statusCode", void 0);
    return PatchGroupResponse;
}(SpeakeasyBase));
export { PatchGroupResponse };
