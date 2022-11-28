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
import { Domain } from "./domain";
import { Group } from "./group";
import { User } from "./user";
export var PermissionRoleEnum;
(function (PermissionRoleEnum) {
    PermissionRoleEnum["RoleUnspecified"] = "ROLE_UNSPECIFIED";
    PermissionRoleEnum["Owner"] = "OWNER";
    PermissionRoleEnum["Organizer"] = "ORGANIZER";
    PermissionRoleEnum["FileOrganizer"] = "FILE_ORGANIZER";
    PermissionRoleEnum["Editor"] = "EDITOR";
    PermissionRoleEnum["Commenter"] = "COMMENTER";
    PermissionRoleEnum["Viewer"] = "VIEWER";
    PermissionRoleEnum["PublishedViewer"] = "PUBLISHED_VIEWER";
})(PermissionRoleEnum || (PermissionRoleEnum = {}));
// Permission
/**
 * The permission setting of an object.
**/
var Permission = /** @class */ (function (_super) {
    __extends(Permission, _super);
    function Permission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowDiscovery" }),
        __metadata("design:type", Boolean)
    ], Permission.prototype, "allowDiscovery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=anyone" }),
        __metadata("design:type", Map)
    ], Permission.prototype, "anyone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain" }),
        __metadata("design:type", Domain)
    ], Permission.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group" }),
        __metadata("design:type", Group)
    ], Permission.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], Permission.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", User)
    ], Permission.prototype, "user", void 0);
    return Permission;
}(SpeakeasyBase));
export { Permission };
