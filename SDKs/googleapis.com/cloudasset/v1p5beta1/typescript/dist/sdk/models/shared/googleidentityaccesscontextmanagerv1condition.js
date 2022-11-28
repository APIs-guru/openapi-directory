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
import { GoogleIdentityAccesscontextmanagerV1DevicePolicy } from "./googleidentityaccesscontextmanagerv1devicepolicy";
// GoogleIdentityAccesscontextmanagerV1Condition
/**
 * A condition necessary for an `AccessLevel` to be granted. The Condition is an AND over its fields. So a Condition is true if: 1) the request IP is from one of the listed subnetworks AND 2) the originating device complies with the listed device policy AND 3) all listed access levels are granted AND 4) the request was sent at a time allowed by the DateTimeRestriction.
**/
var GoogleIdentityAccesscontextmanagerV1Condition = /** @class */ (function (_super) {
    __extends(GoogleIdentityAccesscontextmanagerV1Condition, _super);
    function GoogleIdentityAccesscontextmanagerV1Condition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=devicePolicy" }),
        __metadata("design:type", GoogleIdentityAccesscontextmanagerV1DevicePolicy)
    ], GoogleIdentityAccesscontextmanagerV1Condition.prototype, "devicePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipSubnetworks" }),
        __metadata("design:type", Array)
    ], GoogleIdentityAccesscontextmanagerV1Condition.prototype, "ipSubnetworks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members" }),
        __metadata("design:type", Array)
    ], GoogleIdentityAccesscontextmanagerV1Condition.prototype, "members", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=negate" }),
        __metadata("design:type", Boolean)
    ], GoogleIdentityAccesscontextmanagerV1Condition.prototype, "negate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regions" }),
        __metadata("design:type", Array)
    ], GoogleIdentityAccesscontextmanagerV1Condition.prototype, "regions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requiredAccessLevels" }),
        __metadata("design:type", Array)
    ], GoogleIdentityAccesscontextmanagerV1Condition.prototype, "requiredAccessLevels", void 0);
    return GoogleIdentityAccesscontextmanagerV1Condition;
}(SpeakeasyBase));
export { GoogleIdentityAccesscontextmanagerV1Condition };
