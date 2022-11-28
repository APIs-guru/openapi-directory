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
import { OsPolicyResourceExecResource } from "./ospolicyresourceexecresource";
import { OsPolicyResourceFileResource } from "./ospolicyresourcefileresource";
import { OsPolicyResourcePackageResource } from "./ospolicyresourcepackageresource";
import { OsPolicyResourceRepositoryResource } from "./ospolicyresourcerepositoryresource";
// OsPolicyResource
/**
 * An OS policy resource is used to define the desired state configuration and provides a specific functionality like installing/removing packages, executing a script etc. The system ensures that resources are always in their desired state by taking necessary actions if they have drifted from their desired state.
**/
var OsPolicyResource = /** @class */ (function (_super) {
    __extends(OsPolicyResource, _super);
    function OsPolicyResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exec" }),
        __metadata("design:type", OsPolicyResourceExecResource)
    ], OsPolicyResource.prototype, "exec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=file" }),
        __metadata("design:type", OsPolicyResourceFileResource)
    ], OsPolicyResource.prototype, "file", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], OsPolicyResource.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pkg" }),
        __metadata("design:type", OsPolicyResourcePackageResource)
    ], OsPolicyResource.prototype, "pkg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repository" }),
        __metadata("design:type", OsPolicyResourceRepositoryResource)
    ], OsPolicyResource.prototype, "repository", void 0);
    return OsPolicyResource;
}(SpeakeasyBase));
export { OsPolicyResource };
