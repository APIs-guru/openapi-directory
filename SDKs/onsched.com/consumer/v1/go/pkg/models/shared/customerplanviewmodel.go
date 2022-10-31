package shared

import (
"time")

type CustomerPlanViewModel struct {
    Created *time.Time `json:"created,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *string `json:"id,omitempty"`
    LocationID *string `json:"locationId,omitempty"`
    Name *string `json:"name,omitempty"`
    ObjectName *string `json:"objectName,omitempty"`
    ServiceGroupID *string `json:"serviceGroupId,omitempty"`
    StripePlanID *string `json:"stripePlanId,omitempty"`
    UID *string `json:"uid,omitempty"`
    
}

