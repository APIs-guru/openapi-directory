package shared

import (
"time")

type DateRange struct {
    From time.Time `json:"from"`
    To time.Time `json:"to"`
    
}

