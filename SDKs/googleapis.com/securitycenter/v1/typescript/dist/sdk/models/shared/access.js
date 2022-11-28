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
import { Geolocation } from "./geolocation";
import { ServiceAccountDelegationInfo } from "./serviceaccountdelegationinfo";
// Access
/**
 * Represents an access event.
**/
var Access = /** @class */ (function (_super) {
    __extends(Access, _super);
    function Access() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=callerIp" }),
        __metadata("design:type", String)
    ], Access.prototype, "callerIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=callerIpGeo" }),
        __metadata("design:type", Geolocation)
    ], Access.prototype, "callerIpGeo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=methodName" }),
        __metadata("design:type", String)
    ], Access.prototype, "methodName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=principalEmail" }),
        __metadata("design:type", String)
    ], Access.prototype, "principalEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=principalSubject" }),
        __metadata("design:type", String)
    ], Access.prototype, "principalSubject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccountDelegationInfo", elemType: ServiceAccountDelegationInfo }),
        __metadata("design:type", Array)
    ], Access.prototype, "serviceAccountDelegationInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccountKeyName" }),
        __metadata("design:type", String)
    ], Access.prototype, "serviceAccountKeyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceName" }),
        __metadata("design:type", String)
    ], Access.prototype, "serviceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userAgentFamily" }),
        __metadata("design:type", String)
    ], Access.prototype, "userAgentFamily", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userName" }),
        __metadata("design:type", String)
    ], Access.prototype, "userName", void 0);
    return Access;
}(SpeakeasyBase));
export { Access };
