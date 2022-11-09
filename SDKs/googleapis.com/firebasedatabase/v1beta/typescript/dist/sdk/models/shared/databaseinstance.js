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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var DatabaseInstanceStateEnum;
(function (DatabaseInstanceStateEnum) {
    DatabaseInstanceStateEnum["LifecycleStateUnspecified"] = "LIFECYCLE_STATE_UNSPECIFIED";
    DatabaseInstanceStateEnum["Active"] = "ACTIVE";
    DatabaseInstanceStateEnum["Disabled"] = "DISABLED";
    DatabaseInstanceStateEnum["Deleted"] = "DELETED";
})(DatabaseInstanceStateEnum || (DatabaseInstanceStateEnum = {}));
export var DatabaseInstanceTypeEnum;
(function (DatabaseInstanceTypeEnum) {
    DatabaseInstanceTypeEnum["DatabaseInstanceTypeUnspecified"] = "DATABASE_INSTANCE_TYPE_UNSPECIFIED";
    DatabaseInstanceTypeEnum["DefaultDatabase"] = "DEFAULT_DATABASE";
    DatabaseInstanceTypeEnum["UserDatabase"] = "USER_DATABASE";
})(DatabaseInstanceTypeEnum || (DatabaseInstanceTypeEnum = {}));
// DatabaseInstance
/**
 * Representation of a Realtime Database instance. Details on interacting with contents of a DatabaseInstance can be found at: https://firebase.google.com/docs/database/rest/start.
**/
var DatabaseInstance = /** @class */ (function (_super) {
    __extends(DatabaseInstance, _super);
    function DatabaseInstance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=databaseUrl" }),
        __metadata("design:type", String)
    ], DatabaseInstance.prototype, "databaseUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DatabaseInstance.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=project" }),
        __metadata("design:type", String)
    ], DatabaseInstance.prototype, "project", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], DatabaseInstance.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DatabaseInstance.prototype, "type", void 0);
    return DatabaseInstance;
}(SpeakeasyBase));
export { DatabaseInstance };
