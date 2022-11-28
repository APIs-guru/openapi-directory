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
import { GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig } from "./googleidentityaccesscontextmanagerv1serviceperimeterconfig";
export var GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterTypeEnum;
(function (GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterTypeEnum) {
    GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterTypeEnum["PerimeterTypeRegular"] = "PERIMETER_TYPE_REGULAR";
    GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterTypeEnum["PerimeterTypeBridge"] = "PERIMETER_TYPE_BRIDGE";
})(GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterTypeEnum || (GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterTypeEnum = {}));
// GoogleIdentityAccesscontextmanagerV1ServicePerimeter
/**
 * `ServicePerimeter` describes a set of Google Cloud resources which can freely import and export data amongst themselves, but not export outside of the `ServicePerimeter`. If a request with a source within this `ServicePerimeter` has a target outside of the `ServicePerimeter`, the request will be blocked. Otherwise the request is allowed. There are two types of Service Perimeter - Regular and Bridge. Regular Service Perimeters cannot overlap, a single Google Cloud project can only belong to a single regular Service Perimeter. Service Perimeter Bridges can contain only Google Cloud projects as members, a single Google Cloud project may belong to multiple Service Perimeter Bridges.
**/
var GoogleIdentityAccesscontextmanagerV1ServicePerimeter = /** @class */ (function (_super) {
    __extends(GoogleIdentityAccesscontextmanagerV1ServicePerimeter, _super);
    function GoogleIdentityAccesscontextmanagerV1ServicePerimeter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleIdentityAccesscontextmanagerV1ServicePerimeter.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleIdentityAccesscontextmanagerV1ServicePerimeter.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=perimeterType" }),
        __metadata("design:type", String)
    ], GoogleIdentityAccesscontextmanagerV1ServicePerimeter.prototype, "perimeterType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spec" }),
        __metadata("design:type", GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig)
    ], GoogleIdentityAccesscontextmanagerV1ServicePerimeter.prototype, "spec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig)
    ], GoogleIdentityAccesscontextmanagerV1ServicePerimeter.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GoogleIdentityAccesscontextmanagerV1ServicePerimeter.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useExplicitDryRunSpec" }),
        __metadata("design:type", Boolean)
    ], GoogleIdentityAccesscontextmanagerV1ServicePerimeter.prototype, "useExplicitDryRunSpec", void 0);
    return GoogleIdentityAccesscontextmanagerV1ServicePerimeter;
}(SpeakeasyBase));
export { GoogleIdentityAccesscontextmanagerV1ServicePerimeter };
