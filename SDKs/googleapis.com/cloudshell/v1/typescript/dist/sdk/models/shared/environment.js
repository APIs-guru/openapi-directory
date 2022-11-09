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
export var EnvironmentStateEnum;
(function (EnvironmentStateEnum) {
    EnvironmentStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    EnvironmentStateEnum["Suspended"] = "SUSPENDED";
    EnvironmentStateEnum["Pending"] = "PENDING";
    EnvironmentStateEnum["Running"] = "RUNNING";
    EnvironmentStateEnum["Deleting"] = "DELETING";
})(EnvironmentStateEnum || (EnvironmentStateEnum = {}));
// Environment
/**
 * A Cloud Shell environment, which is defined as the combination of a Docker image specifying what is installed on the environment and a home directory containing the user's data that will remain across sessions. Each user has at least an environment with the ID "default".
**/
var Environment = /** @class */ (function (_super) {
    __extends(Environment, _super);
    function Environment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=dockerImage" }),
        __metadata("design:type", String)
    ], Environment.prototype, "dockerImage", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Environment.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Environment.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=publicKeys" }),
        __metadata("design:type", Array)
    ], Environment.prototype, "publicKeys", void 0);
    __decorate([
        Metadata({ data: "json, name=sshHost" }),
        __metadata("design:type", String)
    ], Environment.prototype, "sshHost", void 0);
    __decorate([
        Metadata({ data: "json, name=sshPort" }),
        __metadata("design:type", Number)
    ], Environment.prototype, "sshPort", void 0);
    __decorate([
        Metadata({ data: "json, name=sshUsername" }),
        __metadata("design:type", String)
    ], Environment.prototype, "sshUsername", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Environment.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "json, name=webHost" }),
        __metadata("design:type", String)
    ], Environment.prototype, "webHost", void 0);
    return Environment;
}(SpeakeasyBase));
export { Environment };
