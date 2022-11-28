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
import { GoogleIdentityAccesscontextmanagerV1EgressPolicy } from "./googleidentityaccesscontextmanagerv1egresspolicy";
import { GoogleIdentityAccesscontextmanagerV1IngressPolicy } from "./googleidentityaccesscontextmanagerv1ingresspolicy";
import { GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices } from "./googleidentityaccesscontextmanagerv1vpcaccessibleservices";
// GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig
/**
 * `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration.
**/
var GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig = /** @class */ (function (_super) {
    __extends(GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig, _super);
    function GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessLevels" }),
        __metadata("design:type", Array)
    ], GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig.prototype, "accessLevels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=egressPolicies", elemType: GoogleIdentityAccesscontextmanagerV1EgressPolicy }),
        __metadata("design:type", Array)
    ], GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig.prototype, "egressPolicies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ingressPolicies", elemType: GoogleIdentityAccesscontextmanagerV1IngressPolicy }),
        __metadata("design:type", Array)
    ], GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig.prototype, "ingressPolicies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources" }),
        __metadata("design:type", Array)
    ], GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restrictedServices" }),
        __metadata("design:type", Array)
    ], GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig.prototype, "restrictedServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpcAccessibleServices" }),
        __metadata("design:type", GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices)
    ], GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig.prototype, "vpcAccessibleServices", void 0);
    return GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig;
}(SpeakeasyBase));
export { GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig };
