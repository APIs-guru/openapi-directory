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
export var GetInstanceHealthResponseHealthStateEnum;
(function (GetInstanceHealthResponseHealthStateEnum) {
    GetInstanceHealthResponseHealthStateEnum["HealthStateUnspecified"] = "HEALTH_STATE_UNSPECIFIED";
    GetInstanceHealthResponseHealthStateEnum["Healthy"] = "HEALTHY";
    GetInstanceHealthResponseHealthStateEnum["Unhealthy"] = "UNHEALTHY";
    GetInstanceHealthResponseHealthStateEnum["AgentNotInstalled"] = "AGENT_NOT_INSTALLED";
    GetInstanceHealthResponseHealthStateEnum["AgentNotRunning"] = "AGENT_NOT_RUNNING";
})(GetInstanceHealthResponseHealthStateEnum || (GetInstanceHealthResponseHealthStateEnum = {}));
// GetInstanceHealthResponse
/**
 * Response for checking if a notebook instance is healthy.
**/
var GetInstanceHealthResponse = /** @class */ (function (_super) {
    __extends(GetInstanceHealthResponse, _super);
    function GetInstanceHealthResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=healthInfo" }),
        __metadata("design:type", Map)
    ], GetInstanceHealthResponse.prototype, "healthInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=healthState" }),
        __metadata("design:type", String)
    ], GetInstanceHealthResponse.prototype, "healthState", void 0);
    return GetInstanceHealthResponse;
}(SpeakeasyBase));
export { GetInstanceHealthResponse };
