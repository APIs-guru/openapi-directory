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
import { ClientRepresentation } from "./clientrepresentation";
import { GroupRepresentation } from "./grouprepresentation";
import { IdentityProviderRepresentation } from "./identityproviderrepresentation";
import { RolesRepresentation } from "./rolesrepresentation";
import { UserRepresentation } from "./userrepresentation";
export var PartialImportRepresentationPolicyEnum;
(function (PartialImportRepresentationPolicyEnum) {
    PartialImportRepresentationPolicyEnum["Skip"] = "SKIP";
    PartialImportRepresentationPolicyEnum["Overwrite"] = "OVERWRITE";
    PartialImportRepresentationPolicyEnum["Fail"] = "FAIL";
})(PartialImportRepresentationPolicyEnum || (PartialImportRepresentationPolicyEnum = {}));
var PartialImportRepresentation = /** @class */ (function (_super) {
    __extends(PartialImportRepresentation, _super);
    function PartialImportRepresentation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clients", elemType: ClientRepresentation }),
        __metadata("design:type", Array)
    ], PartialImportRepresentation.prototype, "clients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups", elemType: GroupRepresentation }),
        __metadata("design:type", Array)
    ], PartialImportRepresentation.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identityProviders", elemType: IdentityProviderRepresentation }),
        __metadata("design:type", Array)
    ], PartialImportRepresentation.prototype, "identityProviders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ifResourceExists" }),
        __metadata("design:type", String)
    ], PartialImportRepresentation.prototype, "ifResourceExists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policy" }),
        __metadata("design:type", String)
    ], PartialImportRepresentation.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roles" }),
        __metadata("design:type", RolesRepresentation)
    ], PartialImportRepresentation.prototype, "roles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=users", elemType: UserRepresentation }),
        __metadata("design:type", Array)
    ], PartialImportRepresentation.prototype, "users", void 0);
    return PartialImportRepresentation;
}(SpeakeasyBase));
export { PartialImportRepresentation };
