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
import { Deployment } from "./deployment";
export var CreateProfileRequestProfileTypeEnum;
(function (CreateProfileRequestProfileTypeEnum) {
    CreateProfileRequestProfileTypeEnum["ProfileTypeUnspecified"] = "PROFILE_TYPE_UNSPECIFIED";
    CreateProfileRequestProfileTypeEnum["Cpu"] = "CPU";
    CreateProfileRequestProfileTypeEnum["Wall"] = "WALL";
    CreateProfileRequestProfileTypeEnum["Heap"] = "HEAP";
    CreateProfileRequestProfileTypeEnum["Threads"] = "THREADS";
    CreateProfileRequestProfileTypeEnum["Contention"] = "CONTENTION";
    CreateProfileRequestProfileTypeEnum["PeakHeap"] = "PEAK_HEAP";
    CreateProfileRequestProfileTypeEnum["HeapAlloc"] = "HEAP_ALLOC";
})(CreateProfileRequestProfileTypeEnum || (CreateProfileRequestProfileTypeEnum = {}));
// CreateProfileRequest
/**
 * CreateProfileRequest describes a profile resource online creation request. The deployment field must be populated. The profile_type specifies the list of profile types supported by the agent. The creation call will hang until a profile of one of these types needs to be collected.
**/
var CreateProfileRequest = /** @class */ (function (_super) {
    __extends(CreateProfileRequest, _super);
    function CreateProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=deployment" }),
        __metadata("design:type", Deployment)
    ], CreateProfileRequest.prototype, "deployment", void 0);
    __decorate([
        Metadata({ data: "json, name=profileType" }),
        __metadata("design:type", Array)
    ], CreateProfileRequest.prototype, "profileType", void 0);
    return CreateProfileRequest;
}(SpeakeasyBase));
export { CreateProfileRequest };
