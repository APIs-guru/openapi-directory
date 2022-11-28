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
import { TlsRouteRouteRule } from "./tlsrouterouterule";
// TlsRoute
/**
 * TlsRoute defines how traffic should be routed based on SNI and other matching L3 attributes.
**/
var TlsRoute = /** @class */ (function (_super) {
    __extends(TlsRoute, _super);
    function TlsRoute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], TlsRoute.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], TlsRoute.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gateways" }),
        __metadata("design:type", Array)
    ], TlsRoute.prototype, "gateways", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meshes" }),
        __metadata("design:type", Array)
    ], TlsRoute.prototype, "meshes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TlsRoute.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules", elemType: TlsRouteRouteRule }),
        __metadata("design:type", Array)
    ], TlsRoute.prototype, "rules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], TlsRoute.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], TlsRoute.prototype, "updateTime", void 0);
    return TlsRoute;
}(SpeakeasyBase));
export { TlsRoute };
// TlsRouteInput
/**
 * TlsRoute defines how traffic should be routed based on SNI and other matching L3 attributes.
**/
var TlsRouteInput = /** @class */ (function (_super) {
    __extends(TlsRouteInput, _super);
    function TlsRouteInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], TlsRouteInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gateways" }),
        __metadata("design:type", Array)
    ], TlsRouteInput.prototype, "gateways", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meshes" }),
        __metadata("design:type", Array)
    ], TlsRouteInput.prototype, "meshes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TlsRouteInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules", elemType: TlsRouteRouteRule }),
        __metadata("design:type", Array)
    ], TlsRouteInput.prototype, "rules", void 0);
    return TlsRouteInput;
}(SpeakeasyBase));
export { TlsRouteInput };
