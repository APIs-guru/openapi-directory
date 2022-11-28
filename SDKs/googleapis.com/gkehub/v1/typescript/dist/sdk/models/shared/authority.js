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
// AuthorityInput
/**
 * Authority encodes how Google will recognize identities from this Membership. See the workload identity documentation for more details: https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity
**/
var AuthorityInput = /** @class */ (function (_super) {
    __extends(AuthorityInput, _super);
    function AuthorityInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issuer" }),
        __metadata("design:type", String)
    ], AuthorityInput.prototype, "issuer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oidcJwks" }),
        __metadata("design:type", String)
    ], AuthorityInput.prototype, "oidcJwks", void 0);
    return AuthorityInput;
}(SpeakeasyBase));
export { AuthorityInput };
// Authority
/**
 * Authority encodes how Google will recognize identities from this Membership. See the workload identity documentation for more details: https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity
**/
var Authority = /** @class */ (function (_super) {
    __extends(Authority, _super);
    function Authority() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identityProvider" }),
        __metadata("design:type", String)
    ], Authority.prototype, "identityProvider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issuer" }),
        __metadata("design:type", String)
    ], Authority.prototype, "issuer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oidcJwks" }),
        __metadata("design:type", String)
    ], Authority.prototype, "oidcJwks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workloadIdentityPool" }),
        __metadata("design:type", String)
    ], Authority.prototype, "workloadIdentityPool", void 0);
    return Authority;
}(SpeakeasyBase));
export { Authority };
